import React from 'react'
import './Main.css'
import { DateFetcher } from './DateFetcher'

export const Main = () => {
  return (
    <div> Show me the DATE!! ().
      <DateFetcher />
    </div>
  )
}





// Create a React component called DateFetcher. The DateFetcher has a state variable that is used to store the UTC date. When the DateFetcher is initially loaded into the browser it displays the following: