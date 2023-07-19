import { useEffect, useState } from "react";

export default function StartScreen({ numQuestions, dispatch }) {
  const [highscore, setHighScore] = useState(0);

  useEffect(function () {
    fetch("http://localhost:8000/highscore")
      .then((res) => res.json())
      .then((data) => setHighScore(data.score));
  }, []);

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <p className="highscore">(Highscore: {highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}

// export default StartScreen;
