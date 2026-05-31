import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>Golf Round Analyzer</h1>
      </header>
      <section style={{ marginBottom: '2rem' }}>
        <p>Welcome to the Golf Round Analyzer! This tool helps you analyze your golf rounds and provides insights to improve your game. Upload your round data and let the analyzer do the work!</p>
      </section>
      <section className="round-form">
        <h2>Upload Your Round Data</h2>
        <label className="round-form-label" htmlFor="course-name">Course Name:</label>
        <input className="round-form-input" type="text" id="course-name" placeholder="Course Name"/>
        <label className="round-form-label" htmlFor="date-played">Date Played:</label>
        <input className="round-form-input" type="text" id="date-played" placeholder="Date Played" />
        <label className="round-form-label" htmlFor="score">Score:</label>
        <input className="round-form-input" type="text" id="score" placeholder="Score" />
        <label className="round-form-label" htmlFor="fairways-hit">Fairways Hit:</label>
        <input className="round-form-input" type="text" id="fairways-hit" placeholder="Fairways Hit" />
        <label className="round-form-label" htmlFor="fairways-possible">Total Fairways Possible:</label>
        <input className="round-form-input" type="text" id="fairways-possible" placeholder="Total Fairways Possible" />
        <label className="round-form-label" htmlFor="greens-in-regulation">Greens in Regulation:</label>
        <input className="round-form-input" type="text" id="greens-in-regulation" placeholder="Greens in Regulation" />
        <label className="round-form-label" htmlFor="putts">Putts:</label>
        <input className="round-form-input" type="text" id="putts" placeholder="Putts" />
        <button className="round-form-submit" id="analyze-button">Analyze Round</button>
      </section>
    </main>
  );
}

export default App;