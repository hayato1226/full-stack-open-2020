import React, { useState } from "react";
import ReactDOM from "react-dom";
import Persons from "./Persons";

const Filter = ({ value, onChange }) => {
  return (
    <form>
      <div>
        filter shown with
        <input value={value} onChange={onChange} />
      </div>
    </form>
  );
};

const PersonForm = ({
  onSubmit,
  onChangePerson,
  onChangeNumber,
  nameValue,
  numValue,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameValue} onChange={onChangePerson} />
      </div>
      <div>
        number: <input value={numValue} onChange={onChangeNumber} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const state = persons.filter((person) => {
      return person.name === newName;
    });
    console.log(state);
    if (state.length > 0) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
      setFilteredPersons(
        filteredPersons.concat({ name: newName, number: newNumber })
      );
      console.log(persons);
    }
    setNewName("");
    setNewNumber("");
  };

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setFilteredPersons(
      persons.filter((person) => {
        return new RegExp("^.*" + event.target.value + ".*$", "i").test(
          person.name
        );
      })
    );
    console.log(filteredPersons);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        onChangePerson={handlePersonChange}
        onChangeNumber={handleNumberChange}
        nameValue={newName}
        numValue={newNumber}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
