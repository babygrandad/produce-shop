using Microsoft.AspNetCore.Identity;

namespace api.Models
{
    public class AppUser : IdentityUser
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; } // Pass this into username too, if the dev do not aprove then you can always add that username field and make i required
    }
}