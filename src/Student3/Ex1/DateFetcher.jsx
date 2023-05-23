import React from 'react'; 
import { useState } from "react"

// export const DateFetcher = () => {

// }

export const DateFetcher = () => {
  let [date, setDate] = useState("Unknown")

  return (
    <div className="Main">
      <button onClick={() => setDate(new Date().getUTCDate())}>Click Me!</button>
      Today's Date: {date}
    </div>
  )
}