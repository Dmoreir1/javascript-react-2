import React from 'react'
import { useState } from 'react'


export const RandomNumber = () => { 
    const [randomNumber, setRandomNumber] = useState(null);

    let genRandomNumber = () => {
        let newNumber = Math.floor(Math.random() * 10) + 1;
        setRandomNumber(newNumber);
    };

    return (
        <div>
            <button onClick={genRandomNumber}>Click me!</button>
            {randomNumber !== null && <p>Random number: {randomNumber}</p>}
        </div>
    );
};