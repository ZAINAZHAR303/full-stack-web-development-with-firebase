import React, { useState } from 'react'
import AfterSubmission from './AfterSubmission'


const Form = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[submit,setsubmit] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault()
        setsubmit(true)
    }
    
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
            <input type="email" name="" id="" placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}  />
            <button type='submit'>click me!</button>
        </form>
        
        {
            submit&&
            <AfterSubmission first={name} second={email}/>
        }
        
    </div>
  )
}

export default Form