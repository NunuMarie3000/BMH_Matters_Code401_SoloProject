using System.ComponentModel.DataAnnotations.Schema;

namespace BMH_Backend.Models
{
  [NotMapped]
  public class Login
  {
    public string Email { get; set; }
    public string Password { get; set; } 
  }
}
