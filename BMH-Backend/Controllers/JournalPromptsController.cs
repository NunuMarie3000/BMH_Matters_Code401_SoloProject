using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Models;

namespace BMH_Backend.Controllers
{
    public class JournalPromptsController : Controller
    {
        private readonly BMH_DbContext _context;

        public JournalPromptsController(BMH_DbContext context)
        {
            _context = context;
        }

        // GET: JournalPrompts
        public async Task<IActionResult> Index()
        {
              return View(await _context.JournalPrompts.ToListAsync());
        }

        // GET: JournalPrompts/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null || _context.JournalPrompts == null)
            {
                return NotFound();
            }

            var journalPrompt = await _context.JournalPrompts
                .FirstOrDefaultAsync(m => m.Id == id);
            if (journalPrompt == null)
            {
                return NotFound();
            }

            return View(journalPrompt);
        }

        // GET: JournalPrompts/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: JournalPrompts/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Body,UploadDate")] JournalPrompt journalPrompt)
        {
            if (ModelState.IsValid)
            {
                _context.Add(journalPrompt);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(journalPrompt);
        }

        // GET: JournalPrompts/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null || _context.JournalPrompts == null)
            {
                return NotFound();
            }

            var journalPrompt = await _context.JournalPrompts.FindAsync(id);
            if (journalPrompt == null)
            {
                return NotFound();
            }
            return View(journalPrompt);
        }

        // POST: JournalPrompts/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id,Body,UploadDate")] JournalPrompt journalPrompt)
        {
            if (id != journalPrompt.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(journalPrompt);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!JournalPromptExists(journalPrompt.Id))
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
            return View(journalPrompt);
        }

        // GET: JournalPrompts/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context.JournalPrompts == null)
            {
                return NotFound();
            }

            var journalPrompt = await _context.JournalPrompts
                .FirstOrDefaultAsync(m => m.Id == id);
            if (journalPrompt == null)
            {
                return NotFound();
            }

            return View(journalPrompt);
        }

        // POST: JournalPrompts/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context.JournalPrompts == null)
            {
                return Problem("Entity set 'BMH_DbContext.JournalPrompts'  is null.");
            }
            var journalPrompt = await _context.JournalPrompts.FindAsync(id);
            if (journalPrompt != null)
            {
                _context.JournalPrompts.Remove(journalPrompt);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool JournalPromptExists(string id)
        {
          return _context.JournalPrompts.Any(e => e.Id == id);
        }
    }
}
