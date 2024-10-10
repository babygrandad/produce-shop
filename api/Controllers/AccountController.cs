using api.Dtos.Account;
using api.Dtos.EmailDto;
using api.DTOs.AccountDtos;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace api.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AccountController : ControllerBase
	{
		private readonly UserManager<AppUser> _userManager;
		private readonly IEmailService _emailService;
		private readonly ITokenService _tokenService;
		private readonly SignInManager<AppUser> _signInManager;
		private readonly ITitleCaseService _titleCaseService;
		private readonly IPasswordHistoryService _passwordHistoryService;

		public AccountController(
			UserManager<AppUser> userManager,
			ITokenService tokenService,
			SignInManager<AppUser> signInManager,
			IEmailService emailService,
			IPasswordHistoryService passwordHistoryService,
			ITitleCaseService titleCaseService)
		{
			_userManager = userManager;
			_tokenService = tokenService;
			_signInManager = signInManager;
			_emailService = emailService;
			_passwordHistoryService = passwordHistoryService;
			_titleCaseService = titleCaseService;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
		{

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var existingUser = await _userManager.FindByEmailAsync(registerDto.Email?.ToLower() ?? string.Empty);
			if (existingUser != null)
			{
				return BadRequest(new { errors = new[] { "Email already exists." } });
			}

			var appUser = new AppUser
			{
				Name = _titleCaseService.ToTitleCase(registerDto.Name!).Trim(),
				Surname = _titleCaseService.ToTitleCase(registerDto.Surname!).Trim(),
				UserName = registerDto.Email!.ToLower(),
				Email = registerDto.Email!.ToLower(),
			};

			var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password ?? string.Empty);

			if (createdUser.Succeeded)
			{
				// Save the password history
				var passwordHash = _userManager.PasswordHasher.HashPassword(appUser, registerDto.Password ?? string.Empty);
				await _passwordHistoryService.AddPasswordAsync(appUser.Id, passwordHash);

				var emailToken = await _userManager.GenerateEmailConfirmationTokenAsync(appUser);
				var confirmationLink = Url.Action("ConfirmEmail",
																					"Account",
																					new
																					{
																						userId = appUser.Id,
																						token = emailToken
																					},
																					Request.Scheme);

				if (confirmationLink == null)
				{
					throw new InvalidOperationException("ALLOWED_CONNECTIONS environment variable is not set.");
				}

				var emailContext = new EmailDto
				{
					EmailRecipient = registerDto.Email!.ToLower(),
					Subject = "Confirm Your Email",
					Link = confirmationLink,
					FullName = $"{_titleCaseService.ToTitleCase(registerDto.Name!).Trim()} {_titleCaseService.ToTitleCase(registerDto.Surname!).Trim()}"
				};

				try
				{
					await _emailService.SendEmailAsync(emailContext, "WelcomeEmail");
				}
				catch (Exception ex)
				{
					await _userManager.DeleteAsync(appUser);
					return StatusCode(500, $"An error occurred while sending the confirmation email. Please try again.: {ex}");
				}

				try
				{
					var roleResult = await _userManager.AddToRoleAsync(appUser, "User");

					if (roleResult.Succeeded)
					{
						return Ok(new { message = "User registered successfully. Please check your email to confirm your account." });
					}
					else
					{
						return StatusCode(500, new { errors = roleResult.Errors.Select(e => e.Description) });
					}
				}
				catch (Exception ex)
				{
					// Correctly return a response with the proper IActionResult and correct exception reference
					return StatusCode(500, new { message = "An internal server error occurred.", exception = ex.Message });
				}
			}
			else
			{
				return StatusCode(500, new { errors = createdUser.Errors.Select(e => e.Description) });
			}
		}

		[HttpPost("login")]
		public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var user = await _userManager.Users.FirstOrDefaultAsync(x => x.Email == loginDto.Email!.ToLower());

			if (user == null)
			{
				return Unauthorized(new { message = "Invalid email or password." });
			}

			var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password!, lockoutOnFailure: true);

			if (result.Succeeded)
			{
				await _userManager.ResetAccessFailedCountAsync(user);

				var roles = await _userManager.GetRolesAsync(user);

				return Ok(
						new
						{
							userName = user.UserName,
							email = user.Email,
							fullName = $"{_titleCaseService.ToTitleCase(user.Name!).Trim()} {_titleCaseService.ToTitleCase(user.Surname!).Trim()}",
							token = _tokenService.CreateToken(user),
							roles
						}
				);
			}
			else if (result.IsLockedOut)
			{
				var lockedUntil = await _userManager.GetLockoutEndDateAsync(user);
				var totalSeconds = Math.Ceiling((lockedUntil?.Subtract(DateTimeOffset.Now).TotalSeconds) ?? 0);
				return Unauthorized(new { message = $"Your account is currently locked, please try again in {totalSeconds} seconds" });
			}
			else
			{
				var accessFailedCount = await _userManager.GetAccessFailedCountAsync(user);
				var maxFailedAccessAttempts = _userManager.Options.Lockout.MaxFailedAccessAttempts;
				var attemptsLeft = maxFailedAccessAttempts - accessFailedCount;

				return Unauthorized(new { message = $"Invalid username or password. You have {attemptsLeft} attempts left" });
			}
		}

		[HttpGet("confirm-email")]
		public async Task<IActionResult> ConfirmEmail(string userId, string token)
		{
			if (userId == null || token == null)
			{
				return RedirectToAction("Index", "Home");
			}

			var user = await _userManager.FindByIdAsync(userId);
			if (user == null)
			{
				return NotFound();
			}

			var frontendUrl = Environment.GetEnvironmentVariable("FRONT_END_LINK");
			if (frontendUrl == null)
			{
				throw new InvalidOperationException("FRONT_END_LINK environment variable is not set.");
			}

			var result = await _userManager.ConfirmEmailAsync(user, token);
			if (result.Succeeded)
			{
				return Redirect(frontendUrl);
			}
			else
			{
				return BadRequest(result.Errors);
			}
		}
	}
	//End
}
