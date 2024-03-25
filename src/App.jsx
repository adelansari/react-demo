import { useState } from 'react';
import './App.css';
import Box from './Box';

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPerson] = useState([
    { id: 1, name: 'Adel', title: 'cool', location: 'Helsinki' },
    { id: 2, name: 'Toni', title: 'cooler', location: 'Helsinki' },
    { id: 3, name: 'Margit', title: 'coolest', location: 'Helsinki' },
  ]);

  const clickIncHandler = () => {
    setCounter(counter + 1);
  };
  const clickDecHandler = () => {
    setCounter(counter - 1);
  };
  const clickResetHandler = () => {
    setCounter(0);
  };

  return (
    <>
      <h1 className='adel-header'>Hello. My name is Adel</h1>

      <p>Counter: {counter}</p>
      <button className='inc-counter' onClick={clickIncHandler}>
        Increment!
      </button>
      <button className='dec-counter' onClick={clickDecHandler}>
        Decrement!
      </button>
      <button className='reset-counter' onClick={clickResetHandler}>
        Reset
      </button>

      {persons.map((person) => (
        <Box key={person.id} name={person.name} title={person.title} location={person.location} />
      ))}
    </>
  );
}

export default App;
