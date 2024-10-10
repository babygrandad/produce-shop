using System.ComponentModel.DataAnnotations;

namespace api.Dtos.Account
{
	public class RegisterDto
	{
		[Required]
		public string? Name { get; set; } // Records the first name of the user
		
		[Required]
		public string? Surname { get; set; }  // Records the surname of the user

		[Required]
		[EmailAddress]
		public string? Email { get; set; }  // Records the email of the user. This will also be used as a username

		[Required]
		public string? Password { get; set; }  // Records the user's password

		[Compare("Password", ErrorMessage = "Passwords do not match.")]
		public string? ConfirmPassword { get; set; }  // Enforces the user's password to match 
	}
}