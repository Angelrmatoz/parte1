import { useState } from "react";
import React from "react";

const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.good + props.neutral + props.bad}</p>
      <p>Average: {(props.good + props.neutral + props.bad) / 3 || 0}</p>
      <p>
        Positive:{" "}
        {(props.good / (props.good + props.neutral + props.bad)) * 100 || 0}%
      </p>
    </div>
  );
};

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
export { Statistics };
