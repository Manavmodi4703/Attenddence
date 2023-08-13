 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper } from "./style";

const Home = ({addOne}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  const add = () => {
      addOne({
      password : password,
      email : email,
      role : role
    })
    switch(role){
      case "Faculty":
        navigate("/batch")
      case "Student" :
        navigate("/status")
    }
  }
   return (
     <>
     <h1 style={{backgroundColor: 'grey' ,textAlign: 'center',color:'black',marginTop: 'auto', width: '100%'
 }}>Student Attendance App</h1>
      <Wrapper action="">
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
           onClick={add}
         />
       </Wrapper>
       <footer>
         <Link to="/register">Register</Link>
       </footer> 
       </>
   )
};


 export default Home;



