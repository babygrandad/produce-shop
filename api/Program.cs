using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using api.Models;
using DotNetEnv;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using api.Data;
using api.Interfaces;
using api.Services;

var builder = WebApplication.CreateBuilder(args);

Env.Load();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Vehicle Booking API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
});

builder.Services.AddDbContext<ApplicationDBContext>((serviceProvider, options) =>
{
    var connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");
    options.UseSqlServer(connectionString);
});

builder.Services.AddIdentity<AppUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
    options.Password.RequireUppercase = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = true;
    options.User.RequireUniqueEmail = true;
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 3;
    options.Lockout.AllowedForNewUsers = true;
})
.AddEntityFrameworkStores<ApplicationDBContext>()
.AddDefaultTokenProviders();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme =
    options.DefaultChallengeScheme =
    options.DefaultForbidScheme =
    options.DefaultScheme =
    options.DefaultSignInScheme =
    options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer((options) =>
{
    var signInKey = Environment.GetEnvironmentVariable("SIGN_IN_KEY");
    if (signInKey == null)
    {
        throw new InvalidOperationException("SIGN_IN_KEY environment variable is not set.");
    }

    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:Audience"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            System.Text.Encoding.UTF8.GetBytes(signInKey)
        )
    };
});

// Dependency injection for the Interfaces, Services and Repositories
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.AddScoped<IPasswordHistoryService, PasswordHistoryService>();
builder.Services.AddScoped<ITitleCaseService, TitleCaseService>();
builder.Services.AddScoped<ITokenService, TokenService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// CORS registration should be done separately
var allowedConnections = Environment.GetEnvironmentVariable("ALLOWED_CONNECTIONS");
if (allowedConnections == null)
{
    throw new InvalidOperationException("ALLOWED_CONNECTIONS environment variable is not set.");
}

app.UseCors(options => options.WithOrigins(allowedConnections)
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

// Seed the admin user
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        var context = services.GetRequiredService<ApplicationDBContext>();
        await context.Database.MigrateAsync(); // Ensure the database is created

        // Call the method to seed the admin user
        await SeedAdminUser(context);
    }
    catch (Exception ex)
    {
        // Handle any errors during seeding
        Console.WriteLine($"An error occurred while seeding the database: {ex.Message}");
    }
}

app.Run();

async Task SeedAdminUser(ApplicationDBContext context)
{
    // Function to generate a new GUID
    string NewGuid() => Guid.NewGuid().ToString();

    // Create admin user
    var adminUserId = NewGuid();
    var adminUser = new AppUser
    {
        Id = adminUserId,
        Name = "Admin",
        Surname = "Admin",
        UserName = "admin@example.com",
        NormalizedUserName = "ADMIN@EXAMPLE.COM",
        Email = "admin@example.com",
        NormalizedEmail = "ADMIN@EXAMPLE.COM",
        EmailConfirmed = true,
        PasswordHash = new PasswordHasher<AppUser>().HashPassword(null, "AdminPassword@1"),
    };

    var userExists = await context.Users.AnyAsync(u => u.Email == adminUser.Email);
    if (!userExists)
    {
        await context.Users.AddAsync(adminUser);
        await context.SaveChangesAsync();

        // Assign admin user to "Admin" role
        var role = await context.Roles.FirstOrDefaultAsync(r => r.Name == "Admin");
        if (role != null)
        {
            var userRole = new IdentityUserRole<string>
            {
                UserId = adminUserId,
                RoleId = role.Id
            };
            await context.UserRoles.AddAsync(userRole);
            await context.SaveChangesAsync();
        }
    }
}
