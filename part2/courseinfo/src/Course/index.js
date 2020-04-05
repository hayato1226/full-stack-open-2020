import React from "react";

const Course = props => {
  return (
    <div>
      <h1>{props.course.name}</h1>
      {props.course.parts.map((p, i) => (
        <div key={i}>
          {p.name} {p.exercises}
        </div>
      ))}
      <br />
      <b>
        total of
        {props.course.parts
          .map((p, idx) => p.exercises)
          .reduce((sum, val) => sum + val)}
        exercises
      </b>
    </div>
  );
};

export default Course;
