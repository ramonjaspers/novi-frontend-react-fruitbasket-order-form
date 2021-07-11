import React from 'react';
import './App.css';
import { useGlobalState, GlobalContext } from './components/globals';

import Strawberry from './components/Strawberry';
import Kiwi from './components/Kiwi';
import Banana from './components/Banana';
import Apple from './components/Apple';
import CustomerForm from './components/CustomerForm'

import screenshot_logo from './assets/screenshot_logo.png'


function App() {
  const globalState = useGlobalState();
  return (
    <GlobalContext.Provider value={globalState}>
      <img id='logo' src={screenshot_logo} alt="logo banner"></img>
      <Strawberry />
      <Kiwi />
      <Banana />
      <Apple />
      <button id='clearButton' onClick={() => globalState.clearStates()}>Reset</button>
      <CustomerForm />
    </GlobalContext.Provider>
  );
}

export default App;
