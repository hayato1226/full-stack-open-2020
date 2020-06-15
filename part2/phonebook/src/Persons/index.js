import React, { useState } from "react";

const Persons = (props) => {
  return (
    <div>
      {props.persons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default Persons;
