import React from 'react'; 
import { useState } from 'react'; 

export const TenCounter = () => {
    let [counter, setCounter] = useState(0)

const handleButtonClick = () => {
    if (counter > 19) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };
  return (
    <div>
      <h3>20! : {counter}</h3>
      <button className='Carisma' onClick={handleButtonClick}>Click ME Now! </button>
    </div>
  );
};

export default TenCounter;