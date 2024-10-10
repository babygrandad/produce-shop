using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class CorrectSuperUserSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "6a7d29cb-c463-4951-9914-c1f7e546806b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0082fc2-401d-46df-81cd-7d5d7fe0c6b8");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e7127038-cf48-45b0-a173-e9ec16e7a220");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "UserID",
                keyValue: "c49eaf90-1a2c-405e-a2b9-232038247a58");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "4fc25edb-3fa5-423a-9e58-56c06d565887", null, "Manager", "MANAGER" },
                    { "af82a528-d17e-4e19-a1a4-8fe9ea5d8d8a", null, "User", "USER" },
                    { "ce2acedf-d3a1-4838-bdf4-09da72671604", null, "Admin", "ADMIN" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "UserID", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "Name", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "Surname", "TwoFactorEnabled", "UserName" },
                values: new object[] { "f9a1936a-873e-49db-934b-5eb2ee13a697", 0, "fb1f289f-4b23-46d0-90e4-309562221f42", "superuser@example.com", true, false, null, "Super", "SUPERUSER@EXAMPLE.COM", "SUPERUSER@EXAMPLE.COM", "AQAAAAIAAYagAAAAENviHe/zJjkrrtmR5x3d0uWWH+05s57kGqlBKHrNw48S6v0UU1Be+pUKAF7HBjBPrw==", null, false, "36b8093c-a1c5-492c-bb27-7f9582e27064", "User", false, "superuser@example.com" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "4fc25edb-3fa5-423a-9e58-56c06d565887");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "af82a528-d17e-4e19-a1a4-8fe9ea5d8d8a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ce2acedf-d3a1-4838-bdf4-09da72671604");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "UserID",
                keyValue: "f9a1936a-873e-49db-934b-5eb2ee13a697");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "6a7d29cb-c463-4951-9914-c1f7e546806b", null, "User", "USER" },
                    { "b0082fc2-401d-46df-81cd-7d5d7fe0c6b8", null, "Admin", "ADMIN" },
                    { "e7127038-cf48-45b0-a173-e9ec16e7a220", null, "Manager", "MANAGER" }
                });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "UserID", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "Name", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "Surname", "TwoFactorEnabled", "UserName" },
                values: new object[] { "c49eaf90-1a2c-405e-a2b9-232038247a58", 0, "861a6379-23b0-471b-97a2-f4bef29e92b7", "superuser@example.com", true, false, null, "", "SUPERUSER@EXAMPLE.COM", "SUPERUSER@EXAMPLE.COM", "AQAAAAIAAYagAAAAEI7oBknYfEsEz18rdBBOuU9Blv8v2EVPEaag2L/9R4LQNNO+hDAHCkAM6ZGZ8drdgQ==", null, false, "591227b0-dd38-476f-8fa3-16fd3c976752", "", false, "superuser@example.com" });
        }
    }
}
