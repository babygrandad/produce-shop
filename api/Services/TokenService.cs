
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using api.Interfaces;
using api.Models;
using Microsoft.IdentityModel.Tokens;

namespace api.Services
{
	public class TokenService : ITokenService
	{
		private readonly IConfiguration _config;
		private readonly SymmetricSecurityKey _key;
		public TokenService(IConfiguration config)
		{
			_config = config;
			
			var signInKey = Environment.GetEnvironmentVariable("SIGN_IN_KEY");
			if(signInKey == null)
			{
				throw new InvalidOperationException("SIGN_IN_KEY environment variable is not set.");
			}

			_key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signInKey));

		}

		public string CreateToken(AppUser user)
		{
			var claims = new List<Claim>()
			{
				new Claim(JwtRegisteredClaimNames.Email, user.Email!),
				new Claim(JwtRegisteredClaimNames.GivenName, user.UserName!)
			};

			var credentials = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(claims),
				Expires = DateTime.Now.AddDays(1), //expires in 24HRS
				SigningCredentials = credentials,
				Issuer = _config["JWT:Issuer"],
				Audience = _config["JWT:Audience"]
			};

			var tokenHandler = new JwtSecurityTokenHandler();
			var token = tokenHandler.CreateToken(tokenDescriptor);
			return tokenHandler.WriteToken(token);
		}
	}
}