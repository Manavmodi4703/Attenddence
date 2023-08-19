 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 import { Container,FormGroup,Footer,Header,LoginForm,Form,Label,Input,Select,Button,H2} from "./style";
import axios from "axios";
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




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./home.css";

// const Home = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   const addInfo = () => {
//     if (role === "Faculty") {
//       navigate("/batch");
//     }
//   };

//   return (
//     <div className="container">
//       <h1 className="header">Student Attendance App</h1>
//       <div className="login-form">
//         <h2>Login</h2>
//         <form onSubmit={addInfo}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               required
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               required
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="role">Role</label>
//             <select
//               id="role"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="" disabled>
//                 Select Your Role
//               </option>
//               <option value="Faculty">Faculty</option>
//               <option value="Student">Student</option>
//             </select>
//           </div>
//           <button className="button" type="submit">
//             Login
//           </button>
//         </form>
//       </div>
//       <footer>
//         <Link to="/register">New User Registration</Link>
//       </footer>
//     </div>
//   );
// };

// export default Home;

// const Home = () => {
//   const [contact, setContact] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   const addInfo = (e) => {
    
//     e.preventDefault();
//     axios.post("https://server-api1-li2k.onrender.com/api/user/login",
//     contact,password)
//     if (role === "Faculty") {
//       navigate("/batch");

//     }
//   };

//   return (<>
//   <div>
//   <header className="header">AttendApp</header>
//     <container>
      
//       <loginform className="loginform">
//         <H2><h2>Login</h2></H2>
//         <Form onSubmit={addInfo}>
//           <FormGroup>
//             <Input
//               type="text"
//               id="text"
//               required
//               placeholder="Contact"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
            
//             <Input
//               type="password"
//               id="password"
//               required
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormGroup>
//           <FormGroup>
            
//              <Select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
//               <option value="" disabled>
//                 ...Select Your Role...
//               </option>
//               <option value="Faculty">Faculty</option>
//               <option value="Student">Student</option>
//             </Select> 
//           </FormGroup>
//           <Button type="submit" >Login</Button>
//         </Form>
//         <br />
//         <Link to="/register">New User?</Link>
//       </loginform>
//       <Footer>
        
//       </Footer>
//     </container>
//     </div>
//     </>
//   );
// };

// export default Home;





import { StyledFormWrapper } from './style'; // Import your styled component from the styles.js file

const Home = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const addInfo = (e) => {
    e.preventDefault();
    axios.post("https://server-api1-li2k.onrender.com/api/user/login", contact, password);
    if (role === "Faculty") {
      navigate("/batch");
    }
  };

  return (
    <StyledFormWrapper>
      <header className="header">AttendApp</header>
      <form className="login-form" onSubmit={addInfo}>
        <h2>Login</h2>
        <input
          type="text"
          id="text"
          required
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="input-field"
        />
        
        <input
        
          type="password"
          id="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <select 
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input-field"
        >
          <option value="" disabled>
            ...Select Your Role...
          </option>
          <option value="Faculty">Faculty</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit" className="submit-button">Login</button>
        <br />
        <Link to="/register" className="link">New User?</Link>
      </form>
      {/* Footer component */}
    </StyledFormWrapper>
  );
};

export default Home;
