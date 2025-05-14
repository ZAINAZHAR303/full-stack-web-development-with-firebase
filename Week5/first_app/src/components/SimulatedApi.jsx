import React, { useEffect, useState } from 'react'
import Login from './Login';

const SimulatedApi = () => {
    const[loading,setLoading] = useState(false)
    // const [users,setUsers] = useState("")
  const fruits = ["apple","mango", "almond","grapes"]
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          // setUsers(["Zain", "Ali", "Sara"]);
          setLoading(false);
        }, 2000);
      }, []);
      
  return (
    <div>
        {loading ? <Login/> : fruits.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}

    </div>
  )
}

export default SimulatedApi