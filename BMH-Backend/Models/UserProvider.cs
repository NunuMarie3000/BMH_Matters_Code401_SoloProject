namespace BMH_Backend.Models
{
  public class UserProvider
  {
    public string Id { get; set; }
    public string UserId { get; set; }
    public List<Provider> Providers { get; set; } = new List<Provider>();
  }
}
