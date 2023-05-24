import React from 'react';
import { useState } from 'react';

export const NumberBuilder = () => {
    let [count, setCount] = useState(0);
    let [numbers, setNumbers] = useState('');

    const addNumber = () => {
        setCount(count + 1);
        setNumbers(numbers + count);
    };

    const resetCount = () => {
        setCount(0);
        setNumbers('');
    };

return (
    <div>
        <button onClick= {addNumber}>Press Me!</button>
        <p> # of times I pressed the button: {count}</p>
        {numbers}
        <button onClick={resetCount}>Clear!</button>
    </div>
)

}


{/* <button onClick={() => handleClick()}>CLEAR!</button> */}