using GolfRoundAnalyzer.Api.Data;
using GolfRoundAnalyzer.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GolfRoundAnalyzer.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GolfRoundsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GolfRoundsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GolfRound>>> GetGolfRounds()
        {
            if(_context.GolfRounds == null)
            {
                return NotFound();
            }
            return await _context.GolfRounds.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GolfRound>> GetGolfRound(int id)
        {
            if (_context.GolfRounds == null)
            {
                return NotFound();
            }

            var golfRound = await _context.GolfRounds.FindAsync(id);
            if (golfRound == null)
            {
                return NotFound();
            }

            return golfRound;
        }

        [HttpPost]
        public async Task<ActionResult<GolfRound>> CreateGolfRound(GolfRound golfRound)
        {
            _context.GolfRounds.Add(golfRound);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetGolfRound), new { id = golfRound.Id }, golfRound);
        }
    }
}