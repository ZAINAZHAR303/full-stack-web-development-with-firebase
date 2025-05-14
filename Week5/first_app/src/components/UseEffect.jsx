import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    // useEffect(()=>{
    //     console.log("compnent mounted")
    // },[])

    // useEffect(()=>{
    //     console.log("side Effect")
    //     setCount(count+1)
    // });

    // useEffect(() => {
    //   console.log("Effect ran!"); // Logs on every render
    //   setCount(count + 1);       // Triggers a re-render → infinite loop!
    // }); // No dependencies
  


    useEffect(() => {
        console.log("count value increased");
    }, [count]);
    return (
    
    <div>
        <button onClick={()=>setCount(count+1)}>click</button>
        <h1>Count: {count}</h1>
    </div>
    // <div>hello world</div>

    )

}

export default UseEffect