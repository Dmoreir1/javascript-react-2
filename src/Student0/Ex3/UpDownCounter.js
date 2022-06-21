import React from "react"

import { useState } from "react"

export const UpDownCounter = (props) => {
  let [counter, setCounter] = useState(props.value)

  const onHandleClick = (direction) => {
    if (direction === "up") {
      setCounter(++counter)
    } else {
      setCounter(--counter)
    }
  }

  return (
    <div className="Main">
      <button onClick={() => onHandleClick("down")}>Down</button>
      {counter}
      <button onClick={() => onHandleClick("up")}>Up</button>
    </div>
  )
}
