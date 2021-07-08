import React from 'react';
import { useGlobalState } from './globals';

function Strawberry() {
  const globalState = useGlobalState();
  return (
    <div className='fruitContent'>
      <h2 className='fruitName'>🍓 Strawberry</h2>
      <button className='minusButton' onClick={() => globalState.strawberryAmount !== 0 ? globalState.setStrawberryAmount(globalState.strawberryAmount - 1) : null}> - </button>
      <p className='fruitAmount'>{globalState.strawberryAmount}</p>
      <button className='plusButton' onClick={() => globalState.setStrawberryAmount(globalState.strawberryAmount + 1)}> + </button>
    </div>
  );
}

export default Strawberry;