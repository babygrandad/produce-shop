namespace api.Models
{
	public class PasswordHistory
	{
		public int? Id { get; set; }

		public string? UserID { get; set; }

		public string? PasswordHash { get; set; }

		public DateTime CreateDate { get; set; } = DateTime.UtcNow;

		// navigation  properties for referencing
		public AppUser? AppUser { get; set; } 
	}
}