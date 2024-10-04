using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
	public class ApplicationDBContext : IdentityDbContext<AppUser>
	{
		public ApplicationDBContext(DbContextOptions<ApplicationDBContext> dbContextOptions)
		: base(dbContextOptions)
		{
		}

		public DbSet<PasswordHistory> PasswordHistories { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			// This Block of code renames the "Id" Column to UserID
			modelBuilder.Entity<AppUser>()
				.Property(u => u.Id)
				.HasColumnName("UserID");

				 modelBuilder.Entity<PasswordHistory>()
					.HasOne(p => p.AppUser)
					.WithMany(u => u.PasswordHistories)
					.HasForeignKey(p => p.UserID);

			List<IdentityRole> roles = new List<IdentityRole>
			{
				new IdentityRole
				{
					Name="Admin",
					NormalizedName = "ADMIN",
				},
				new IdentityRole
				{
					Name="User",
					NormalizedName="USER",
				},
				new IdentityRole
				{
					Name="Manager",
					NormalizedName="MANAGER",
				}
			};

			modelBuilder.Entity<IdentityRole>().HasData(roles);

		}
	}
}