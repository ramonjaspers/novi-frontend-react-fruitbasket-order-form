import React, {useContext} from 'react';
import {GlobalContext}  from './globals';

function Strawberry() {
  const globalState = useContext(GlobalContext);
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
