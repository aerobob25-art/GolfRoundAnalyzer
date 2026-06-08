import type { FormEvent } from 'react';
import type { GolfRound } from '../types';
import { golfService } from '../services/golfservice';
import '../App.css'

export function NewRoundPage() {
    return (
        <main>
            <section style={{ marginBottom: '2rem' }}>
                <p>Upload your round data and let the analyzer do the work!</p>
            </section>
            <form className="round-form" onSubmit={handleSubmitRound}>
                <h2>Upload Your Round Data</h2>
                <label className="round-form-label" htmlFor="course-name">Course Name:</label>
                <input className="round-form-input" type="text" id="course-name" name="course-name" placeholder="Course Name"/>
                <label className="round-form-label" htmlFor="date-played">Date Played:</label>
                <input className="round-form-input" type="text" id="date-played" name="date-played" placeholder="Date Played" />
                <label className="round-form-label" htmlFor="score">Score:</label>
                <input className="round-form-input" type="text" id="score" name="score" placeholder="Score" />
                <label className="round-form-label" htmlFor="fairways-hit">Fairways Hit:</label>
                <input className="round-form-input" type="text" id="fairways-hit" name="fairways-hit" placeholder="Fairways Hit" />
                <label className="round-form-label" htmlFor="fairways-possible">Total Fairways Possible:</label>
                <input className="round-form-input" type="text" id="fairways-possible" name="fairways-possible" placeholder="Total Fairways Possible" />
                <label className="round-form-label" htmlFor="greens-in-regulation">Greens in Regulation:</label>
                <input className="round-form-input" type="text" id="greens-in-regulation" name="greens-in-regulation" placeholder="Greens in Regulation" />
                <label className="round-form-label" htmlFor="putts">Putts:</label>
                <input className="round-form-input" type="text" id="putts" name="putts" placeholder="Putts" />
                <button type="submit" className="round-form-submit" id="analyze-button">Analyze Round</button>
            </form>
        </main>
    );
}

const handleSubmitRound = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const round: GolfRound = {
    courseName: formData.get("course-name") as string,
    datePlayed: formData.get("date-played") as string,
    score: Number(formData.get("score")),
    fairwaysHit: Number(formData.get("fairways-hit")),
    fairwaysPossible: Number(formData.get("fairways-possible")),
    greensInRegulation: Number(formData.get("greens-in-regulation")),
    putts: Number(formData.get("putts")),
  };
  golfService.createGolfRound(round).then((createdRound) => {
    console.log("Created round:", createdRound);
  });
}