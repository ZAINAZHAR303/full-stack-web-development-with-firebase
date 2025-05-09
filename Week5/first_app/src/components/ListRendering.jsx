import React, { useEffect } from 'react'

const ListRendering = () => {

    const fruits = ["apple","mango", "almond","grapes"]

    // useEffect(()=>{
    //     // side effect logic 
    //     console.log("component mounted")
    // })
  return (
    <div>
        {
            fruits && fruits.map((item, index)=>(
                <li key={index}>{item}</li>
            ))

        }


    </div>
  )
}

export default ListRendering