using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Models;
using Microsoft.AspNetCore.Cors;

namespace BMH_Backend.Controllers
{
  public class DailyGreetingsController: Controller
  {
    private readonly BMH_DbContext _context;

    public DailyGreetingsController( BMH_DbContext context )
    {
      _context = context;
    }

    [HttpGet]
    [Route("greetings")]
    [EnableCors("MyPolicy")]
    public async Task<List<DailyGreeting>> Index()
    {
      return await _context.DailyGreetings.ToListAsync();
    }

    // GET: DailyGreetings/Details/5
    public async Task<IActionResult> Details( string id )
    {
      if (id == null || _context.DailyGreetings == null)
      {
        return NotFound();
      }

      var dailyGreeting = await _context.DailyGreetings
          .FirstOrDefaultAsync(m => m.Id == id);
      if (dailyGreeting == null)
      {
        return NotFound();
      }

      return View(dailyGreeting);
    }

    // GET: DailyGreetings/Create
    public IActionResult Create()
    {
      return View();
    }

    // POST: DailyGreetings/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create( [Bind("Id,Body")] DailyGreeting dailyGreeting )
    {
      if (ModelState.IsValid)
      {
        _context.Add(dailyGreeting);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
      }
      return View(dailyGreeting);
    }

    // GET: DailyGreetings/Edit/5
    public async Task<IActionResult> Edit( string id )
    {
      if (id == null || _context.DailyGreetings == null)
      {
        return NotFound();
      }

      var dailyGreeting = await _context.DailyGreetings.FindAsync(id);
      if (dailyGreeting == null)
      {
        return NotFound();
      }
      return View(dailyGreeting);
    }

    // POST: DailyGreetings/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit( string id, [Bind("Id,Body")] DailyGreeting dailyGreeting )
    {
      if (id != dailyGreeting.Id)
      {
        return NotFound();
      }

      if (ModelState.IsValid)
      {
        try
        {
          _context.Update(dailyGreeting);
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!DailyGreetingExists(dailyGreeting.Id))
          {
            return NotFound();
          }
          else
          {
            throw;
          }
        }
        return RedirectToAction(nameof(Index));
      }
      return View(dailyGreeting);
    }

    // GET: DailyGreetings/Delete/5
    public async Task<IActionResult> Delete( string id )
    {
      if (id == null || _context.DailyGreetings == null)
      {
        return NotFound();
      }

      var dailyGreeting = await _context.DailyGreetings
          .FirstOrDefaultAsync(m => m.Id == id);
      if (dailyGreeting == null)
      {
        return NotFound();
      }

      return View(dailyGreeting);
    }

    // POST: DailyGreetings/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed( string id )
    {
      if (_context.DailyGreetings == null)
      {
        return Problem("Entity set 'BMH_DbContext.DailyGreetings'  is null.");
      }
      var dailyGreeting = await _context.DailyGreetings.FindAsync(id);
      if (dailyGreeting != null)
      {
        _context.DailyGreetings.Remove(dailyGreeting);
      }

      await _context.SaveChangesAsync();
      return RedirectToAction(nameof(Index));
    }

    private bool DailyGreetingExists( string id )
    {
      return _context.DailyGreetings.Any(e => e.Id == id);
    }
  }
}
