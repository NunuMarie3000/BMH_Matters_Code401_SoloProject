namespace BMH_Backend.Models
{
  public class UserEntry
  {
    public string Id { get; set; }
    public string UserId { get; set; }
    public List<Entry> Entries { get; set; }
  }
}
