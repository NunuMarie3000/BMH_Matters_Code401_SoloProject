using System.ComponentModel.DataAnnotations.Schema;

namespace BMH_Backend.Models
{
  [NotMapped]
  public class NewEntry
  {
    public string Title { get; set; }
    public string Body { get; set; }
  }
}
