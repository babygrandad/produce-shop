using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
	public class PasswordHistoryService : IPasswordHistoryService
	{
		private readonly UserManager<AppUser> _userManager;
		private readonly ApplicationDBContext _dbContext;

		public PasswordHistoryService(
			UserManager<AppUser> userManager,
			ApplicationDBContext dbContext)
		{
			_dbContext = dbContext;
			_userManager = userManager;
		}

		public async Task<PasswordHistory> AddPasswordAsync(string userID, string hashedPassword)
		{
			var passwordHistory = new PasswordHistory
			{
				UserID = userID,
				PasswordHash = hashedPassword,
				CreateDate = DateTime.UtcNow
			};

			_dbContext.PasswordHistories.Add(passwordHistory);
			await _dbContext.SaveChangesAsync();

			return passwordHistory;
		}

		public async Task<bool> IsPasswordReusedAsync(string userId, string hashedPassword, TimeSpan period)
		{
			var cutoffDate = DateTime.UtcNow - period;

			var passwordHistories = await _dbContext.PasswordHistories
				.Where(ph => ph.UserID == userId && ph.CreateDate >= cutoffDate)
				.ToListAsync();


			var user = await _userManager.FindByIdAsync(userId);

			// Check if the user exists
			if (user == null)
			{
				throw new InvalidOperationException("User not found.");
			}

			foreach (var passwordHistory in passwordHistories)
			{

				if (string.IsNullOrEmpty(passwordHistory.PasswordHash) || string.IsNullOrEmpty(hashedPassword))
				{
					continue;
				}

				var result = new PasswordHasher<AppUser>().VerifyHashedPassword(user, passwordHistory.PasswordHash, hashedPassword);
				if (result == PasswordVerificationResult.Success)
				{
					return true;
				}
			}

			return false;
		}

	}
}