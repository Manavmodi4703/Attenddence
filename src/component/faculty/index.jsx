// import React from "react"
// import { useNavigate } from "react-router";


// const Faculty = () => {
 
//  const navigate = useNavigate() 
//   const handleSubmit =(e)=>{
//  e.preventDefault()
//     navigate("/");
//   };

  
//   return (
//     <>
//     <header><h1>CSE Department</h1></header>
//       <form action="">
//         <h1>Faculty Registration</h1>
//         <input
//           type="text"
//           required
//           placeholder="Faculty Name"
//           pattern="[A-Za-z A-Za-z]+"
//         />

//         <input
//          type="text"
//         required placeholder="ID Code"
//          pattern="[0-9]+"
//           />

//         <input
//          type="email" 
//          required placeholder="Email"
//          />

//         <input type="password"
//          required placeholder="Password" />
//         <input type="password" required placeholder=" Confirm Password" />
        
//         <input type="file" 
//         required />
//         <br />

//         <input  type="submit" value="Submit" onClick={handleSubmit} />
//       </form>
//     </>
//   )
// }

// export default Faculty
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./faculty.css"; 
import axios from "axios";

const Faculty = () => {
  const navigate = useNavigate();
  const [name,setName] = useState("")
  const [contact,setContact] = useState("")
  const [password,setPassword] = useState("")
  //const [role,setRole] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "Loading";
    e.target.succeed='true';
    
    axios.post("https://server-api1-li2k.onrender.com/api/user/add",
    {name,contact,password}).then(res=>{
      console.log(res.data);
      alert("you are successfully registered")

    }).catch(err=>{
      console.log('error in registering',err)
  
    }).finally(()=>{
      e.target.value="u r registered";
      e.target.succeed='false';
      setName('')
      setContact('');
      setPassword('');
      
    })
  
    navigate("/");
  
  };

  return (
    <div className="container">
      <header>
        <h2>CSE Department</h2>
      </header>
      <div className="registration-form">
        <h2>Faculty Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="facultyName">Faculty Name</label>
            <input
            value={name}
              type="text"
              id="facultyName"
              onChange={e => setName(e.target.value)}
              required
              placeholder="Enter faculty name"
              pattern="[A-Za-z A-Za-z]+"
            />
          </div>
         
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={e =>setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>
          <input type="text"
          onChange={e=> setContact(e.target.value)}
          placeholder="Contact" />
          

          
           
           
       
        
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Faculty;
