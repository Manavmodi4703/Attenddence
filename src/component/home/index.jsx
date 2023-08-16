//  import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Wrapper } from "./style";
// import './home.css'

// const Home = () => {
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const navigate = useNavigate()


//   const addInfo = () => {
//     setPassword(password);
//     setEmail(email);
//     setRole(role);
//   if(role == "Faculty"){
//     navigate("/batch");
//   }
// };
 
//    return (
//      <>
//      <h1 style={{backgroundColor: 'grey' ,textAlign: 'center',color:'black',marginTop: 'auto', width: '100%'
//  }}>Student Attendance App</h1>
//       <Wrapper action="">
        
//          <input
//            type="email"
//            required
//            placeholder="Email"
//            onChange = {(e) => setEmail(e.target.value)}
//          />
//           <input
//            type="password"
//            required
//            placeholder="Password"
//            onChange={(e) => setPassword(e.target.value)}
//          />
//          <select onChange={(e) => setRole(e.target.value)}>
//            <option disabled selected value="select your role">Select Your Role</option>
//            <option value="Faculty">Faculty</option>
//            <option value="Student">Student</option>
//          </select >
//          <input
//            type="submit"
//            value="Login"
//            onClick={addInfo}
//          />
         
//        </Wrapper>
//        <footer>
//          <Link to="/register">New User Registration</Link>
//        </footer> 
//        </>
//    )
// };


//  export default Home;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./home.css"; 

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const addInfo = () => {
    if (role === "Faculty") {
      navigate("/batch");
    }
  };

  return (
    <div className="container">
      <h1 className="header">Student Attendance App</h1>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={addInfo}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="" disabled>
                Select Your Role
              </option>
              <option value="Faculty">Faculty</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <button className="button" type="submit">Login</button>
        </form>
      </div>
      <footer>
        <Link to="/register">New User Registration</Link>
      </footer>
    </div>
  );
};

export default Home;


