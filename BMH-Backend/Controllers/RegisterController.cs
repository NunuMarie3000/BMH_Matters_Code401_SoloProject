using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BMH_Backend.Areas.Identity.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.WebUtilities;
using System.Text.Encodings.Web;
using System.Text;
using Microsoft.AspNetCore.Cors;
using BMH_Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace BMH_Backend.Controllers
{

  //[Route("api/[controller]")]
  //[EnableCors("myAllowSpecificOrigins")]
  [EnableCors("MyPolicy")]
  [ApiController]
  public class RegisterController: ControllerBase
  {
    BMH_DbContext _context;
    public RegisterController(BMH_DbContext context )
    {
      _context = context;
    }

    //[HttpPost]
    //[Route("api/register")]
    //public async Task<ActionResult<User>> PostUser( User user )
    //{
    //  _context.User.Add(user);
    //  try
    //  {
    //    await _context.SaveChangesAsync();
    //  }
    //  catch (DbUpdateException)
    //  {
    //    if (UserExists(user.Id))
    //    {
    //      return Conflict();
    //    }
    //    else
    //    {
    //      throw;
    //    }
    //  }

    //  return CreatedAtAction("GetUser", new { id = user.Id }, user);
    //}


    [HttpPost]
    [Route("api/register")]
    [EnableCors("MyPolicy")]
    public string Register( [Bind("FirstName,LastName,Email,Password,Birthday,Id")] ApplicatonUser user )
    {
      // this is where i'll register new users
      if (ModelState.IsValid)
      {
        var newUser = CreateUser();
        newUser.Id = Guid.NewGuid().ToString();
        newUser.Email = user.Email;
        newUser.Password = user.Password;
        newUser.FirstName = user.FirstName;
        newUser.LastName = user.LastName;
        newUser.Birthday = (DateTime)user.Birthday;

        _context.Users.Add(newUser);

        // create new instance of UserEntry and UserProvider and add
        var newUserEntry = new UserEntry();
        newUserEntry.Id = Guid.NewGuid().ToString();
        newUserEntry.UserId = newUser.Id;
        newUserEntry.Entries = new List<Entry>();
        // save to context
        _context.UserEntries.Add(newUserEntry);

        var newUserProvider = new UserProvider();
        newUserProvider.Id = Guid.NewGuid().ToString();
        newUserProvider.UserId = newUser.Id;
        newUserProvider.Providers = new List<Provider>();
        // save to context
        _context.UserProviders.Add(newUserProvider);

        // add to user
        newUser.UserProviderId = newUserProvider.Id;
        newUser.UserEntryId = newUserEntry.Id;

        // create default entry
        var FirstEntry = new Entry();
        FirstEntry.Id = Guid.NewGuid().ToString();
        FirstEntry.UserId = newUser.Id;
        FirstEntry.Title = "Your first Journal Entry!";
        FirstEntry.Body = "Welcome to bmh matters! This is your journal page, you can write down any thoughts or feeling you have, whether that be about your mental health journey, or even what you had for lunch! It's all up to you!";
        FirstEntry.DateCreated = DateTime.Now;
        // save to context
        _context.Entries.Add(FirstEntry);

        // add default entry to the user's entries
        newUserEntry.Entries.Add(FirstEntry);



        _context.SaveChanges();

        return newUser.Id;
      }
      else
        return null;

    }

    [HttpGet]
    [Route("api/login/{email}/{password}")]
    [EnableCors("MyPolicy")]
    public async Task<string> Login( string email, string password )
    {
      if (ModelState.IsValid)
      {
        //var user = await _context.Users.Where(u => u.Email == userlogin.Email && u.Password == userlogin.Password).Include(u => u.Entries).Include(u => u.Providers).FirstOrDefaultAsync();
        //var user = _context.Users.Where(u => u.Email == userlogin.Email && u.Password == userlogin.Password).FirstOrDefault();
        var user = await _context.Users.Where(u => u.Email == email && u.Password == password).FirstOrDefaultAsync();

        if (user != null)
        {
          //return something that'll signal a positive login
          return user.Id;
        }
        else
        {
          // return something that'll signal a negative login
          return null;
        }
      }
      else
        return null;
    }

    private ApplicatonUser CreateUser()
    {
      return Activator.CreateInstance<ApplicatonUser>();
    }

    private bool UserExists( string id )
    {
      return _context.User.Any(e => e.Id == id);
    }

  }
  }
