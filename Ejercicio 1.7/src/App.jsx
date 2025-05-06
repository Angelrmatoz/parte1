import { useState } from "react";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button
          onClick={() => {
            setGood(good + 1);
            console.log(`Click en good: ${good}`);
          }}
        >
          good
        </button>

        <button
          onClick={() => {
            setNeutral(neutral + 1);
            console.log(`Click en neutral: ${neutral}`);
          }}
        >
          neutral
        </button>

        <button
          onClick={() => {
            setBad(bad + 1);
            console.log(`Click en bad: ${bad}`);
          }}
        >
          bad
        </button>
      </div>

      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Average: {(good + neutral + bad) / 3 || 0}</p>
        <p>Positive: {(good / (good + neutral + bad)) * 100 || 0}%</p>
      </div>
    </div>
  );
};

export default App;
