using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using BMH_Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace BMH_Backend.Areas.Identity.Data;

// Add profile data for application users by adding properties to the ApplicatonUser class
public class ApplicatonUser: IdentityUser
{
  [Key]
  //public string UserId { get; set; }
  public string Id { get; set; }
  public string FirstName { get; set; }
  public string LastName { get; set; }
  public string Email { get; set; }
  public string Password { get; set; }
  public DateTime? Birthday { get; set; }
  public string UserEntryId { get; set; }
  public string UserProviderId { get; set; }
  public string? ProfilePic { get; set; }

}

