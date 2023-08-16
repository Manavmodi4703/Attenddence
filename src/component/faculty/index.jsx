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
import React from "react";
import { useNavigate } from "react-router";
import "./faculty.css"; 

const Faculty = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
              type="text"
              id="facultyName"
              required
              placeholder="Enter faculty name"
              pattern="[A-Za-z A-Za-z]+"
            />
          </div>
          <div className="form-group">
            <label htmlFor="idCode">ID Code</label>
            <input
              type="text"
              id="idCode"
              required
              placeholder="Enter ID code"
              pattern="[0-9]+"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              placeholder="Confirm password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload Photo</label>
            <input
              type="file"
              id="file"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Faculty;
