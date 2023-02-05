using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Cors;

namespace BMH_Backend.Controllers
{
  //[Route("api/[controller]")]
  [EnableCors("MyPolicy")]
  [ApiController]
  public class EntriesController: ControllerBase
  {
    private readonly BMH_DbContext _context;

    public EntriesController( BMH_DbContext context )
    {
      _context = context;
    }

    // get all entries by user
    [EnableCors("MyPolicy")]
    [HttpGet]
    [Route("api/{userId}/entries")]
    public async Task<List<Entry>> GetAllEntries(string userId)
    {
      var userEntry = await _context.UserEntries.Where(ue=>ue.UserId == userId).Include(ue=>ue.Entries).FirstOrDefaultAsync();
      if(userEntry == null)
      {
        return null;
      }
      var entries = userEntry.Entries;
      entries.Reverse();

      return entries;
    }

    // get entry by id
    [EnableCors("MyPolicy")]
    [HttpGet]
    [Route("api/{userId}/entries/{entryId}")]
    public Entry GetEntryById(string userId, string entryId)
    {
      var entry = _context.Entries.Where(e=>e.Id == entryId && e.UserId == userId).FirstOrDefault();
      if(entry == null)
      {
        return null;
      }
      return entry;
    }

    // create new entry
    [EnableCors("MyPolicy")]
    [HttpPost]
    [Route("api/{userId}/newentry")]
    public async Task<Entry> CreateNewEntry(string userId, [FromBody][Bind("Title,Body")] NewEntry newentry)
    {
      if(!ModelState.IsValid)
      {
        return null;
      }
      //var user = _context.Users.FirstOrDefaultAsync();
      var userEntries = await _context.UserEntries.Where(ue => ue.UserId == userId).Include(ue=>ue.Entries).FirstOrDefaultAsync();
      if(userEntries == null)
      {
        return null;
      }
      Entry newEntry = new Entry();
      newEntry.Id = Guid.NewGuid().ToString();
      newEntry.UserId = userId;
      newEntry.Title = newentry.Title;
      newEntry.Body= newentry.Body;
      newEntry.DateCreated = DateTime.Now;

      // add entry to context
      _context.Entries.Add(newEntry);

      // add entry to user's entries list
      userEntries.Entries.Add(newEntry);

      // save context
      await _context.SaveChangesAsync();

      return newEntry;
    }

    //update entry
    [EnableCors("MyPolicy")]
    [HttpPut]
    [Route("api/{userId}/entries/{entryId}")]
    public async Task<Entry> UpdateEntry(string userId, string entryId, [FromBody][Bind("Title,Body")]NewEntry updateMe)
    {
      var entry = await _context.Entries.Where(e => e.Id == entryId && e.UserId == userId).FirstOrDefaultAsync();
      var user = await _context.Users.Where(u => u.Id == userId).FirstOrDefaultAsync();
      if (entry == null || user == null)
      {
        return null;
      }

      entry.Title = updateMe.Title;
      entry.Body = updateMe.Body;
      entry.DateUpdated= DateTime.Now;

      await _context.SaveChangesAsync();

      return entry;
    }

    // delete entry by id
    [EnableCors("MyPolicy")]
    [HttpDelete]
    [Route("api/{userId}/entries/{entryId}")]
    public async Task<IActionResult> DeleteEntryById( string userId, string entryId )
    {
      var entry = await _context.Entries.Where(e => e.Id == entryId && e.UserId == userId).FirstOrDefaultAsync();
      var userEntry = await _context.UserEntries.Where(ue => ue.UserId == userId).Include(ue=>ue.Entries).FirstOrDefaultAsync();
      var user = _context.Users.Where(u => u.Id == userId).FirstOrDefault();
      if (entry == null || user == null)
      {
        return null;
      }

      //remove entry from userEntry list
      userEntry.Entries.Remove(entry);

      // remove entry from context;
      _context.Entries.Remove(entry);

      await _context.SaveChangesAsync();

      return NoContent();
      
    }
  }
}
