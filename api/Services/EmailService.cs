using System.Net.Mail;
using api.Dtos.EmailDto;
using api.Interfaces;

namespace api.Services
{
	public class EmailService : IEmailService
	{
		private string LoadTemplate(string templateName)
		{
			var rootPath = Directory.GetCurrentDirectory(); // Get the current working directory
			var templatePath = Path.Combine(rootPath, "EmailTemplates", $"{templateName}.html"); // Construct the full path

			if (!File.Exists(templatePath))
			{
				throw new FileNotFoundException($"Template file not found: {templatePath}");
			}

			return File.ReadAllText(templatePath);
		}

		private string PopulateTemplate(string template, (string Placeholder, string Value)[] replacements)
		{
			foreach (var (placeholder, value) in replacements)
			{
				template = template.Replace(placeholder, value);
			}
			return template;
		}

		public async Task SendEmailAsync(EmailDto emailDto, string templateName)
		{

			var emailContext = emailDto;

			if (emailContext == null)
			{
				throw new ArgumentException("Invalid context type. Expected EmailContext.");
			}

			using (var client = new SmtpClient("localhost", 1025)) // MailHog SMTP server address and port
			{
				var template = LoadTemplate(templateName);
				var body = PopulateTemplate(template, new (string, string)[]
				{
					("{nameOfUser}", emailContext.FullName),
					("{link}", emailDto.Link)
				});

				var mailMessage = new MailMessage
				{
					From = new MailAddress("FreshProduce@example.com"),
					Body = body,
					IsBodyHtml = true
				};

				mailMessage.To.Add(emailDto.EmailRecipient);

				await client.SendMailAsync(mailMessage);
			}
		}
	}
}