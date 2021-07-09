import React, {useState} from 'react';

export const GlobalContext = React.createContext(null);

export function useGlobalState(initialState = {}) {
  const [strawberryAmount, setStrawberryAmount] = useState(0);
  const [bananaAmount, setBananaAmount] = useState(0);
  const [appleAmount, setAppleAmount] = useState(0);
  const [kiwiAmount, setKiwiAmount] = useState(0);

  const clearStates = () => {
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
