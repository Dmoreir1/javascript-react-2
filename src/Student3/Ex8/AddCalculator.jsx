import React from 'react';
import { useState } from 'react';

export const AddCalculator = () => {
    // const [count1, setCount1] = useState(0);
    // const [count2, setCount2] = useState(0);
    // const [count3, setCount3] = useState(0);
    const [total, setTotal] = useState(0);

    const clickButton1 = () => {
        // setCount1(count1 + 1);
        setTotal(total + 1);
    }
    const clickButton2 = () => {
    // setCount2(count2 + 2);
    setTotal(total + 2);    
    }
            const clickButton3 = () => {
                // setCount3(count3 + 3);
                setTotal(total + 3);
    };

    return (
        <div>
            <p><button onClick = {clickButton1}>+ 1</button></p>
            <p><button onClick = {clickButton2}>+ 2</button></p>
            <p><button onClick = {clickButton3}>+ 3</button></p>
            <p>Sum: {total} </p>
        </div>
    );
};