import React from 'react';
import { useGlobalState } from './globals';

function Banana() {
  const globalState = useGlobalState();
  return (
    <div className='fruitContent'>
      <h2 className='fruitName'>🍌 Banana</h2>
      <button className='minusButton' onClick={() => globalState.bananaAmount !== 0 ? globalState.setBananaAmount(globalState.bananaAmount - 1) : null}> - </button>
      <p className='fruitAmount'>{globalState.bananaAmount}</p>
      <button className='plusButton' onClick={() => globalState.setBananaAmount(globalState.bananaAmount + 1)}> + </button>
    </div>
  );
}

export default Banana;