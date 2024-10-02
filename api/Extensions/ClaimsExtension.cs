using System.Security.Claims;

namespace api.Extensions
{
  public static class ClaimsExtensions
  {
    public static string GetUserEmail(this ClaimsPrincipal user)
    {
      if (user == null)
      {
        throw new ArgumentNullException(nameof(user), "ClaimsPrincipal cannot be null");
      }

      var emailClaim = user.Claims.SingleOrDefault(x => x.Type == ClaimTypes.Email);
      
      if (emailClaim == null)
      {
        throw new InvalidOperationException("Email claim not found");
      }

      return emailClaim.Value;
    }

    public static string GetUserName(this ClaimsPrincipal user)
    {
      if (user == null)
      {
        throw new ArgumentNullException(nameof(user), "ClaimsPrincipal cannot be null");
      }

      var userNameClaim = user.Claims.SingleOrDefault(x => x.Type == ClaimTypes.GivenName);

      if (userNameClaim == null)
      {
        throw new InvalidOperationException("Username claim not found");
      }

      return userNameClaim.Value;
    }
  }
}