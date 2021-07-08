import React from 'react';
import { useGlobalState } from './globals';

function Kiwi() {
  const globalState = useGlobalState();
  return (
    <div className='fruitContent'>
        <h2 className='fruitName'>🥝 Kiwi</h2>
        <button className='minusButton' onClick={() => globalState.kiwiAmount !== 0 ? globalState.setKiwiAmount(globalState.kiwiAmount - 1) : null}> - </button>
        <p className='fruitAmount'>{globalState.kiwiAmount}</p>
        <button className='plusButton' onClick={() => globalState.setKiwiAmount(globalState.kiwiAmount + 1)}> + </button>

        {/* However!!!! if we call the clearState from this position it will set the kiwiAmount to 0 */}
    </div>
  );
}

export default Kiwi;