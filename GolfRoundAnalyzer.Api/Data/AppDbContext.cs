using Microsoft.EntityFrameworkCore;
using GolfRoundAnalyzer.Api.Models;

namespace GolfRoundAnalyzer.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<GolfRound> GolfRounds => Set<GolfRound>();
    }
}
