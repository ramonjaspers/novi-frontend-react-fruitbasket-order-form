import React, {useContext} from 'react';
import {GlobalContext}  from './globals';

function Kiwi() {
  const globalState = useContext(GlobalContext);
  return (
    <div className='fruitContent'>
        <h2 className='fruitName'>🥝 Kiwi</h2>
        <button className='minusButton' onClick={() => globalState.kiwiAmount !== 0 ? globalState.setKiwiAmount(globalState.kiwiAmount - 1) : null}> - </button>
        <p className='fruitAmount'>{globalState.kiwiAmount}</p>
        <button className='plusButton' onClick={() => globalState.setKiwiAmount(globalState.kiwiAmount + 1)}> + </button>
    </div>
  );
}

export default Kiwi;
