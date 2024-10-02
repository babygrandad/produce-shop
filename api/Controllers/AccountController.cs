using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
    private readonly IIdService _idService;
    private readonly ITitleCaseService _titleCaseService;
    private readonly IPasswordHistoryService _passwordHistoryService;
    private readonly ILogger<AccountController> _logger;

    public AccountController(
        UserManager<AppUser> userManager,
        ITokenService tokenService,
        SignInManager<AppUser> signInManager,
        IEmailService emailService,
        IPasswordHistoryService passwordHistoryService,
        IIdService idService,
        ITitleCaseService titleCaseService,
        ILogger<AccountController> logger)
    {
      _userManager = userManager;
      _tokenService = tokenService;
      _signInManager = signInManager;
      _emailService = emailService;
      _passwordHistoryService = passwordHistoryService;
      _idService = idService;
      _titleCaseService = titleCaseService;
      _logger = logger;
    }
  }

}