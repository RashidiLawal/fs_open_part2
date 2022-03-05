import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Back from "/src/Backkend/Back";
import axios from "axios";
import Notification from "./Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleNewName = (e) => {
    e.preventDefault();

    const userExist = persons.find(
      (person) => JSON.stringify(person.name) === JSON.stringify(newName)
    );

    const numberExist = persons.find(
      (person) => person.number === person.newNumber
    );

    if (userExist) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. replace the old number with a new one?`
        )
      ) {
        const id = userExist.id;
        Back.update(id, { name: newName, number: newNumber }).then((res) => {
          setPersons((persons) =>
            persons.map((person) => {
              if (person.id === res.data.id) person.number = res.data.number;
              return person;
            })
          );
          setNewNumber("");
          setNewName("");

          setMessage(`Added ${newName}`)
          setTimeout(() => {
            setMessage(null)
          }, 7000)
        });
      }
    } else {
      const newContact = { name: newName, number: newNumber };
      Back.create(newContact).then((response) => {
        setPersons(persons.concat(response));
        setNewNumber("");
        setNewName("");

        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
         }, 7000)


      }).catch((error) => {
        setMessage(`An error occured creating ${newName}`)
        setTimeout(() => {
         setMessage(null)
        }, 7000)
      })
      Back.getAll().then((response) => {
        setPersons(response);
      });
    }
  };

  const filteredPerson = query.trim()
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : persons;

  useEffect(() => {
    console.log("effect");
    Back.getAll().then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      setPersons(response);
    });
  }, []);

  const handleRemovePerson = (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      Back.deletePerson(id).then((res) => { 
        setPersons(persons.filter((person) => person.id !== id));
         
          const usertoDelete = persons.find(person=>person.id===id)
        setMessage(`${usertoDelete.name} successfully deleted from phonebook`)
          setTimeout(() => {
            setMessage(null)
          }, 2000)
      })
      .catch((error) => {
         if (error.response.status === 404) {
           setErrorMessage(`${persons.find((person) => person.id === id).name} has already been removed from server`)
           setTimeout(() => {
             setErrorMessage(null)
           }, 2000)
         }
      })
    } 

  };
  return (
    <div>
      <h2>Phonebook</h2>
      {(message||errorMessage) && <Notification message={message} errorMessage={errorMessage}/>

      }
        
      <Filter query={query} setQuery={setQuery} />

      <h2>Add a new</h2>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        onSubmit={handleNewName}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>

      <div>
        <Persons
          name={filteredPerson.map((person, personIndex) => (
            <div key={`person_${personIndex}`}>
              {
                <>
                  <span> {person.name}</span> <span>{person.number}</span>
                </>
              }
              <button
                type="button"
                onClick={() => handleRemovePerson(person.id)}
              >
                Delete
              </button>
            </div>
          ))}
        />
      </div>
    </div>
  );
}
export default App;
