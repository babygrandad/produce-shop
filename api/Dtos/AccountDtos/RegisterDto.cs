using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Account
{
	public class RegisterDto
	{
		[Required]
		public string Name { get; set; }
		
		[Required]
		public string Surname { get; set; }

		[Required]
		[EmailAddress]
		public string Email { get; set; }

		[Required]
		public string Password { get; set; }

		[Compare("Password", ErrorMessage = "Passwords do not match.")]
		public string ConfirmPassword { get; set; }
	}
}