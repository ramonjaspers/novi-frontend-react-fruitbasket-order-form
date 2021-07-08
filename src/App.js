import React from 'react';
import './App.css';
import Strawberry from './components/strawberry';
import Kiwi from './components/kiwi';
import Banana from './components/banana';
import Apple from './components/apple';
import { useGlobalState } from './components/globals';


function App() {
  const globalState = useGlobalState();
  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <Strawberry />
      <Kiwi />
      <Banana />
      <Apple />
      {/* call clear state call */}
      <button id='clearButton' onClick={() => globalState.clearStates()}>Reset</button>
    </>
  );
}

export default App;
