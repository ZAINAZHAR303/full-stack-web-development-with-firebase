import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("compnent mounted")
    },[])

    // useEffect(() => {
    //   console.log("Effect ran!"); // Logs on every render
    //   setCount(count + 1);       // Triggers a re-render → infinite loop!
    // }); // No dependencies
  


    // useEffect(() => {
    //     console.log("Runs when 'someProp' changes");
    // }, [someProp]);
    return (
    <div>Count: {count}</div>

    )
}

export default UseEffect