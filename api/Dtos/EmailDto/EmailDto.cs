using System.ComponentModel.DataAnnotations;

namespace api.Dtos.EmailDto
{
	public class EmailDto
	{
		[Required]
		public string EmailRecipient { get; set; } = string.Empty;
		[Required]
		public string Subject { get; set; } = string.Empty;
		[Required]
		public string Link { get; set; } = string.Empty;
		[Required]
		public string FullName { get; set; } = string.Empty;
	}
}