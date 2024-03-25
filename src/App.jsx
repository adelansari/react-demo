import './App.css';
import Box from './Box';

function App() {
  return (
    <>
      <h1 className='adel-header'>Hello. My name is Adel</h1>

      <Box name='Adel' title='cool' location='Helsinki' />
      <Box name='Toni' title='cooler' location='Helsinki' />
      <Box name='Margit' title='coolest' location='Helsinki' />
    </>
  );
}

export default App;
