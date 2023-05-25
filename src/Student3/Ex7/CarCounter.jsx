import React from 'react';
import { useState } from 'react';

export const CarCounter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [total, setTotal] = useState(0);

    const clickButton1 = () => {
        setCount1(count1 + 1);
        setTotal(total + 1);
    }
    const clickButton2 = () => {
    setCount2(count2 + 1);
    setTotal(total + 1);    
    }
            const clickButton3 = () => {
                setCount3(count3 + 1);
                setTotal(total + 1);
    };

    return (
        <div>
            <p>BMW: <button onClick = {clickButton1}>BMW</button> {count1} times</p>
            <p>Mercedes-Benz: <button onClick = {clickButton2}>Mercedes-Benz</button> {count2} times</p>
            <p>Tesla: <button onClick = {clickButton3}>Tesla</button> {count3} times</p>
            <p>Total: {total} times</p>
        </div>
    );
};