import React from "react"
import { useNavigate } from "react-router";


const Faculty = () => {
 
 const navigate = useNavigate() 
  const handleSubmit =(e)=>{
 e.preventDefault()
    navigate("/");
  };

  
  return (
    <>
    <header><h1>CSE Department</h1></header>
      <form action="">
        <h1>Faculty Registration</h1>
        <input
          type="text"
          required
          placeholder="Faculty Name"
          pattern="[A-Za-z A-Za-z]+"
        />

        <input
         type="text"
        required placeholder="ID Code"
         pattern="[0-9]+"
          />

        <input
         type="email" 
         required placeholder="Email"
         />

        <input type="password"
         required placeholder="Password" />
        <input type="password" required placeholder=" Confirm Password" />
        
        <input type="file" 
        required />
        <br />

        <input  type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  )
}

export default Faculty
