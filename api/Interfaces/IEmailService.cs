using api.Dtos.EmailDto;

namespace api.Interfaces
{
	public interface IEmailService
	{
		Task SendEmailAsync(EmailDto emailDto, string templateName);
	}
}