namespace GolfRoundAnalyzer.Api.Models
{
    public class GolfRound
    {
        public int Id { get; set; }
        public string DatePlayed { get; set; } = "";
        public string CourseName { get; set; } = "";
        public int Score { get; set; }
        public int FairwaysHit { get; set; }
        public int FairwaysPossible { get; set; }
        public int GreensInRegulation { get; set; }
        public int Putts { get; set; }
    }
}
