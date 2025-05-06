import { useState } from "react";
import React from "react";

const Botones = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Good</button>
      <button onClick={props.onNeutralClick}>Neutral</button>
      <button onClick={props.onBadClick}>Bad</button>
    </div>
  );
};

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>
        {props.text}: {props.value}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;

  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine
              text="Total:"
              value={props.good + props.neutral + props.bad}
            />
            <StatisticsLine
              text="Average:"
              value={`${((props.good + props.neutral + props.bad) / 3 || 0).toFixed(2)} %`}
            /> 
            <StatisticsLine
              text="Positive:"
              value={`${
                ((props.good / (props.good + props.neutral + props.bad)) * 100) || 0
              } %`}
            />
          </tbody>
        </table>
      </div>
    );
  }
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

        <Botones
          onClick={() => setGood(good + 1)}
          onNeutralClick={() => setNeutral(neutral + 1)}
          onBadClick={() => setBad(bad + 1)}
        />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
