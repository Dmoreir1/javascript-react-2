import React from 'react';
import { useState } from 'react';

export const MinMaxCounter = () => {
    let [counter, setCounter] = useState(0);
    let [min, setMin] = useState(0);
    let [max, setMax] = useState(0);

const upButtonClick = () => {
    let mCounter = counter + 1;
    setCounter(mCounter);

    if (mCounter > max) {
        setMax(mCounter);
    }
};    

const downButtonClick = () => {
    const mCounter = counter - 1;
    setCounter(mCounter);

    if (mCounter < min) {
        setMin(mCounter);
    }
};

    return (
        <div>
            This is the final countdown: {counter}
             
             
             <button id='up' onClick = {upButtonClick}>Going up!</button>
             <button onClick = {downButtonClick}>Going down!</button>
            <p>This is the highest!:{max}</p>
             
             <p>This is the lowest: {min} </p>
        </div>
    )
}




// export const Clicker = ({onClicked}) => {

//   const handleClick = (message) => {
//     console.log(message)
//   }
//   return (
//     <div>
//         <button onClick={() => onClicked('He said Yes!!!')}>Yes!</button>
//         <button onClick={() => onClicked("He said No!!")}>No!</button>
//     </div>
//   )
// }