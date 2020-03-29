import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td> {props.value}</td>
    </tr>
  );
};
const Statistics = props => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  console.log(good, neutral, bad);

  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No Feedback Given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={good + neutral + bad} />
          <Statistic
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <Statistic
            text="positive"
            value={(good * 100) / (good + neutral + bad)}
          />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerGood = () => {
    setGood(good + 1);
  };
  const handlerBad = () => {
    setBad(bad + 1);
  };
  const handlerNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handlerGood} text="good" />
      <Button onClick={handlerNeutral} text="neutral" />
      <Button onClick={handlerBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
