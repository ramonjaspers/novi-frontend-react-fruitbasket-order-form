import React from 'react';
import './App.css';
import Strawberry from './components/strawberry';
import Kiwi from './components/kiwi';
import Banana from './components/banana';
import Apple from './components/apple';
import {useGlobalState, GlobalContext} from './components/globals';


function App() {
  const globalState = useGlobalState();
  return (
    <GlobalContext.Provider value={globalState}>
      <h1>Fruitmand bezorgservice</h1>
      <Strawberry/>
      <Kiwi/>
      <Banana/>
      <Apple/>
      <button id='clearButton' onClick={() => globalState.clearStates()}>Reset</button>
    </GlobalContext.Provider>
  );
}

export default App;
