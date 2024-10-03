using api.Dtos.Account;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

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
		private readonly ILogger<AccountController> _logger;

		public AccountController(
			UserManager<AppUser> userManager,
			ITokenService tokenService,
			SignInManager<AppUser> signInManager,
			IEmailService emailService,
			IPasswordHistoryService passwordHistoryService,
			ITitleCaseService titleCaseService,
			ILogger<AccountController> logger)
		{
			_userManager = userManager;
			_tokenService = tokenService;
			_signInManager = signInManager;
			_emailService = emailService;
			_passwordHistoryService = passwordHistoryService;
			_titleCaseService = titleCaseService;
			_logger = logger;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
		{

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var existingUser = await _userManager.FindByEmailAsync(registerDto.Email.ToLower());
			if (existingUser != null)
			{
				return BadRequest(new { errors = new[] { "Email already exists." } });
			}

			var appUser = new AppUser
			{
				Name = _titleCaseService.ToTitleCase(registerDto.Name).Trim(),
				Surname = _titleCaseService.ToTitleCase(registerDto.Surname).Trim(),
				UserName = registerDto.UserName,
				Email = registerDto.Email.ToLower(),
			};

			var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

			if (createdUser.Succeeded)
			{
				// Save the password history
				var passwordHash = _userManager.PasswordHasher.HashPassword(appUser, registerDto.Password);
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

				var emailRecipient = registerDto.Email.ToLower();
				var subject = "Confirm Your Email";
				var link = confirmationLink;
				var fullName = $"{_titleCaseService.ToTitleCase(registerDto.Name).Trim()} {_titleCaseService.ToTitleCase(registerDto.Surname).Trim()}";

				// try canging the SendEmailAsync parameter (link) to take (context) as an object/class so that you can use 1 method for all sorts
				try
				{
					await _emailService.SendEmailAsync(emailRecipient, subject, fullName, link, "WelcomeEmail");
				}
				catch (Exception ex)
				{
					await _userManager.DeleteAsync(appUser);
					return StatusCode(500, $"An error occurred while sending the confirmation email. Please try again.");
				}

				try
				{
					var roleResult = await _userManager.AddToRoleAsync(appUser, "Admin");

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
	}
	//End
}
