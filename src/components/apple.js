import React, {useContext} from 'react';
import { GlobalContext } from './globals';

function Apple() {
  const globalState = useContext(GlobalContext);
  return (
    <div className='fruitContent'>
      <h2 className='fruitName'>🍏 Apple</h2>
      <button className='minusButton' onClick={() => globalState.appleAmount !== 0 ? globalState.setAppleAmount(globalState.appleAmount - 1) : null}> - </button>
      <p className='fruitAmount'>{globalState.appleAmount}</p>
      <button className='plusButton' onClick={() => globalState.setAppleAmount(globalState.appleAmount + 1)}> + </button>
    </div>
  );
}

export default Apple;
