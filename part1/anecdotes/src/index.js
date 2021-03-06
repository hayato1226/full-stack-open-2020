import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    Array.apply(null, { length: anecdotes.length }).map(function() {
      return 0;
    })
  );
  const handlerNextAnecdotes = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const handlerVote = () => {
    console.log(points);
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
      has {points[selected]} votes.
      <Button onClick={handlerNextAnecdotes} text="next anecdote" />
      <Button onClick={handlerVote} text="vote" />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[points.indexOf(Math.max.apply(null, points))]}
      <br />
      has {Math.max.apply(null, points)} votes.
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
