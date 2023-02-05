using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace BMH_Backend.Models
{
  public class Provider
  {
    [Key]
    public string ProviderId { get; set;  } // this will be web_scraper_order
    public string? startUrl { get; set; } // web_scraper_start_url
    public string? link { get; set; } // therapist-link
    public string? href { get; set; } // therapist_link_href
    public string Name { get; set; }
    public string? Title { get; set; }
    public string? Pronouns { get; set; }
    public string? AboutSection { get; set; }
    public string? CostPerSession { get; set; }
    public string? slidingScale { get; set; }
    public string? Headshot { get; set; }
    public string? Phone { get; set; }
    public string? Address1 { get; set; }
    public string? Address2 { get; set; }
    public string? City { get; set; }
    public string? State { get; set; }
    public string? ZipCode { get; set; }
    public string? Specialties { get; set; }
    public string? Issues { get; set; }
    public string? Communities { get; set; }
    public string? AssociatedState { get; set; }
  }
}
