using System.ComponentModel.DataAnnotations;

namespace api.DTOs.AccountDtos
{
	public class LoginDto
	{	[Required]
		public string? Email { get; set; }
		public string? Password { get; set; }
	}
}