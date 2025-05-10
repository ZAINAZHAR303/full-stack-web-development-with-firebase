import React, { useState } from 'react'

const SimulatedApi = () => {
    const[loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setUsers(["Zain", "Ali", "Sara"]);
          setLoading(false);
        }, 2000);
      }, []);
      
  return (
    <div>
        {loading ? <p>Loading...</p> : users.map((item,index)=>(
            
        ))}

    </div>
  )
}

export default SimulatedApi