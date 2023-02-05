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
  public class MentalHealthTipsController: Controller
  {
    private readonly BMH_DbContext _context;

    public MentalHealthTipsController( BMH_DbContext context )
    {
      _context = context;
    }

    [HttpGet]
    [Route("/mentalhealthtips")]
    [EnableCors("MyPolicy")]
    // GET: MentalHealthTips
    public async Task<List<MentalHealthTip>> Index()
    {
      return await _context.MentalHealthTips.ToListAsync();
    }

    // GET: MentalHealthTips/Details/5
    public async Task<IActionResult> Details( string id )
    {
      if (id == null || _context.MentalHealthTips == null)
      {
        return NotFound();
      }

      var mentalHealthTip = await _context.MentalHealthTips
          .FirstOrDefaultAsync(m => m.Id == id);
      if (mentalHealthTip == null)
      {
        return NotFound();
      }

      return View(mentalHealthTip);
    }

    // GET: MentalHealthTips/Create
    public IActionResult Create()
    {
      return View();
    }

    // POST: MentalHealthTips/Create
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Create( [Bind("Id,Body,UploadDate")] MentalHealthTip mentalHealthTip )
    {
      if (ModelState.IsValid)
      {
        _context.Add(mentalHealthTip);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(Index));
      }
      return View(mentalHealthTip);
    }

    // GET: MentalHealthTips/Edit/5
    public async Task<IActionResult> Edit( string id )
    {
      if (id == null || _context.MentalHealthTips == null)
      {
        return NotFound();
      }

      var mentalHealthTip = await _context.MentalHealthTips.FindAsync(id);
      if (mentalHealthTip == null)
      {
        return NotFound();
      }
      return View(mentalHealthTip);
    }

    // POST: MentalHealthTips/Edit/5
    // To protect from overposting attacks, enable the specific properties you want to bind to.
    // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Edit( string id, [Bind("Id,Body,UploadDate")] MentalHealthTip mentalHealthTip )
    {
      if (id != mentalHealthTip.Id)
      {
        return NotFound();
      }

      if (ModelState.IsValid)
      {
        try
        {
          _context.Update(mentalHealthTip);
          await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
          if (!MentalHealthTipExists(mentalHealthTip.Id))
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
      return View(mentalHealthTip);
    }

    // GET: MentalHealthTips/Delete/5
    public async Task<IActionResult> Delete( string id )
    {
      if (id == null || _context.MentalHealthTips == null)
      {
        return NotFound();
      }

      var mentalHealthTip = await _context.MentalHealthTips
          .FirstOrDefaultAsync(m => m.Id == id);
      if (mentalHealthTip == null)
      {
        return NotFound();
      }

      return View(mentalHealthTip);
    }

    // POST: MentalHealthTips/Delete/5
    [HttpPost, ActionName("Delete")]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteConfirmed( string id )
    {
      if (_context.MentalHealthTips == null)
      {
        return Problem("Entity set 'BMH_DbContext.MentalHealthTips'  is null.");
      }
      var mentalHealthTip = await _context.MentalHealthTips.FindAsync(id);
      if (mentalHealthTip != null)
      {
        _context.MentalHealthTips.Remove(mentalHealthTip);
      }

      await _context.SaveChangesAsync();
      return RedirectToAction(nameof(Index));
    }

    private bool MentalHealthTipExists( string id )
    {
      return _context.MentalHealthTips.Any(e => e.Id == id);
    }
  }
}
