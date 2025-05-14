"use client"

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>Counter
        <h1>{count}</h1>
        <button  className='text-while font-bold text-2xl bg-amber-400  '  onClick={() => setCount(count + 1)}>Increment</button>
        
    </div>
  )
}

export default Counter