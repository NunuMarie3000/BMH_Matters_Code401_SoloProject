using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Models;
using BMH_Backend.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging.Abstractions;

namespace BMH_Backend.Controllers
{
  [ApiController]
  public class UsersController: ControllerBase
  {
    private readonly BMH_DbContext _context;
    private readonly IImageService _imageService;

    public UsersController(BMH_DbContext context, IImageService imageService)
    {
      _context = context;
      _imageService = imageService;
    }


    [HttpGet]
    [Route("user/{id}")]
    public async Task<ApplicatonUser> GetUserById(string id)
    {
      // this is where i wanna return user info
      // should i also return all the user's entries/providers?
      // maybe i should keep it separate and make an entries/providers controller
      var user = await _context.Users.Where(u=>u.Id == id).FirstOrDefaultAsync();
      if(user != null)
      {
        return user;
        //return user;
      }
      return null;
    }

    // get all users' fav providers
    [HttpGet]
    [Route("{userId}/providers")]
    public List<Provider> GetUserProviders(string userId)
    {
      var userProviders = _context.UserProviders.Where(up => up.UserId == userId).Include(up=>up.Providers).FirstOrDefault();
      if (userProviders == null)
        return null;
      //return user.Providers;
      var providers = new List<Provider>();
      foreach(var provider in userProviders.Providers)
      {
        providers.Add(provider);
      }
      return providers;
    }

    // route to add provider to user
    [HttpPut]
    [Route("{userId}/{providerId}")]
    public async Task<Provider> AddOrRemoveProviderFromUserList(string userId, string providerId)
    {
      var userProvider = await _context.UserProviders.Where(up => up.UserId== userId).FirstOrDefaultAsync();
      var provider = await _context.Providers.Where(p=>p.ProviderId == providerId).FirstOrDefaultAsync();
      if(userProvider == null || provider == null)
      {
        return null;
      }
      // if the provider isn't already in the list, then add it and save
      if (!userProvider.Providers.Contains(provider))
      {
        userProvider.Providers.Add(provider);
      }else if(userProvider.Providers.Contains(provider))
      {
        userProvider.Providers.Remove(provider);
      }
      await _context.SaveChangesAsync();

      return provider;
    }

    // route to remove provider from user
    [HttpDelete]
    [Route("{userId}/{providerId}")]
    public async Task<IActionResult> RemoveProviderFromUser( string userId, string providerId )
    {
      var userProvider = await _context.UserProviders.Where(up => up.UserId == userId).FirstOrDefaultAsync();
      var provider = await _context.Providers.Where(p => p.ProviderId == providerId).FirstOrDefaultAsync();
      if (userProvider == null || provider == null)
      {
        return null;
      }
      if (userProvider.Providers.Contains(provider))
      {
        userProvider.Providers.Remove(provider);
        await _context.SaveChangesAsync();
      }
      return NoContent();
    }
  }
}
