using BMH_Backend.Areas.Identity.Data;
using BMH_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using System.Data;
using System.Globalization;

namespace BMH_Backend.Controllers
{
  //[Route("api/[controller]")]
  [ApiController]
  public class ProvidersController: ControllerBase
  {
    private readonly BMH_DbContext _context;
    public ProvidersController( BMH_DbContext context ) 
    { 
      _context= context;
    }

    [HttpGet]
    [Route("api/providers")]
    public async Task<List<Provider>> GetAllProvider()
    {
      return await _context.Providers.ToListAsync();
    }

    [HttpGet]
    [Route("api/providers/{state}")]
    public async Task<List<Provider>> GetProviderByState(string state)
    {
      string capState = CultureInfo.CurrentCulture.TextInfo.ToTitleCase(state.ToLower());
      return await _context.Providers.Where(p=>p.AssociatedState == capState).ToListAsync();
    }

  }
}
