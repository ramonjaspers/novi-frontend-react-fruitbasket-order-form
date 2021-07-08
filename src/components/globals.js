import {useState} from 'react';

export function useGlobalState() {
  const [strawberryAmount, setStrawberryAmount] = useState(0);
  const [bananaAmount, setBananaAmount] = useState(0);
  const [appleAmount, setAppleAmount] = useState(0);
  const [kiwiAmount, setKiwiAmount] = useState(0);

  const clearStates = () => {
    // code does come here but does not seem to apply value 0 to the states.
    console.log('icamehere');
    setStrawberryAmount(0);
    setBananaAmount(0);
    setAppleAmount(0);
    setKiwiAmount(0);
  }

  return {
    strawberryAmount,
    bananaAmount,
    appleAmount,
    kiwiAmount,
    setStrawberryAmount,
    setBananaAmount,
    setAppleAmount,
    setKiwiAmount,
    clearStates,
  }
}
