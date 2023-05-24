import React from 'react';
import { useState } from 'react';

export const UpDownCounter = () => {
    let [counter, setCounter] = useState(0) 

const upButtonClick = () => {
    setCounter(counter + 1); 
    }    

const downButtonClick = () => {
    setCounter(counter - 1);
}
    return (
        <div>
             <button id='up' onClick = {upButtonClick}>Going up!</button>
             THE FINAL COUNTDOWN: { counter }
            <button onClick = {downButtonClick}>Going down!</button>
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