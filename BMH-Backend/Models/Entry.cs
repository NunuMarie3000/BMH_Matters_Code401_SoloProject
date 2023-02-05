using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BMH_Backend.Models
{
  public class Entry
  {
    [Key]
    public string Id { get; set; }
    //[ForeignKey("UserId")]
    public string UserId { get; set; }
    public string Title { get; set; }
    public string Body { get; set; }
    public DateTime DateCreated {get;set;}
    public DateTime? DateUpdated { get;set;}
  }
}
