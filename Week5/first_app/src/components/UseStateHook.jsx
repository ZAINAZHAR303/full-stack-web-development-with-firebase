import React, { useState } from 'react'

const UseStateHook = () => {
    const[count,setCount]=useState(0)

    // const increment=()=>{
    //     setCount((prevcount)=> prevcount+1)
    //     setCount((prevcount)=> prevcount+1)
        
    // }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() =>setCount(count+1)}>click Me!</button>
    </div>
  )
}

export default UseStateHook