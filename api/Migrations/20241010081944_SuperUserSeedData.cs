using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class SuperUserSeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PasswordHistories_AspNetUsers_UserID",
                table: "PasswordHistories");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9bc90f68-272d-4bed-85a8-b5c63c891580");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a6fef508-d000-49cd-a99b-f31d9e64ff03");

            migrationBuilder.AlterColumn<string>(
                name: "UserID",
                table: "PasswordHistories",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "PasswordHash",
                table: "PasswordHistories",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

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

            migrationBuilder.AddForeignKey(
                name: "FK_PasswordHistories_AspNetUsers_UserID",
                table: "PasswordHistories",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "UserID");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PasswordHistories_AspNetUsers_UserID",
                table: "PasswordHistories");

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

            migrationBuilder.AlterColumn<string>(
                name: "UserID",
                table: "PasswordHistories",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "PasswordHash",
                table: "PasswordHistories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9bc90f68-272d-4bed-85a8-b5c63c891580", null, "Admin", "ADMIN" },
                    { "a6fef508-d000-49cd-a99b-f31d9e64ff03", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_PasswordHistories_AspNetUsers_UserID",
                table: "PasswordHistories",
                column: "UserID",
                principalTable: "AspNetUsers",
                principalColumn: "UserID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
