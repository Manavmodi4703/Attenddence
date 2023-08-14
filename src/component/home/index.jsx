 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./style";
import Batch from "../batch";

const Home = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  const handleRoleChange1 = (e) => {
    const selectedRole = e.target.value;
    setRole(setRole)
if(setRole === "Faculty"){
  navigate("/batch")
 }
 else{
  navigate("/status")
 }


  const addInfo = () => {
    setPassword(password);
    setEmail(email);
    setRole(role);
  if(role == "Faculty"){
    navigate("/batch");
  }
};
  return (
    <>
    <h1>Student Attendance App</h1>
      <form action="">
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="Email"
          onChange = {(e) => setEmail(e.target.value)}
        />
        <select onChange={(e) => setRole(e.target.value)}>
          <option disabled selected value="select your role">Select Your Role</option>
          <option value="Faculty">Faculty</option>
          <option value="Student">Student</option>
        </select>
        <input
          type="submit"
          value="Submit"
          onClick={addInfo}
        />
      </form>
      <footer>
        <Link to="/register">Register</Link>
      </footer>
    </>
  );

};

  // const add = () => {
  //     addOne({
  //     password : password,
  //     email : email,
  //     role : role,
     
  //   })

  // }
   return (
     <>
     <h1 style={{backgroundColor: 'grey' ,textAlign: 'center',color:'black',marginTop: 'auto', width: '100%'
 }}>Student Attendance App</h1>
      <Wrapper action="">
        
         <input
           type="email"
           required
           placeholder="Email"
           onChange = {(e) => setEmail(e.target.value)}
         />
          <input
           type="password"
           required
           placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
         />
         <select onChange={(e) => setRole(e.target.value)}>
           <option disabled selected value="select your role">Select Your Role</option>
           <option value="Faculty">Faculty</option>
           <option value="Student">Student</option>
         </select >
         <input
           type="submit"
           value="Submit"
           role={setRole}
           onClick={handleRoleChange1}
         />
         
       </Wrapper>
       <footer>
         <Link to="/register">New User Registration</Link>
       </footer> 
       </>
   )
};


 export default Home;



