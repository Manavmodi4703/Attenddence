// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router'

// const Student = () => {
//   // const student = useSelector(state => state.student)

//   const navigate = useNavigate();

//   const handleSubmit = () =>
//   {
//     navigate('/');
//   }
//   return (
//     <>
//     <header>
//       <h1>CSE Department</h1>
//     </header>
//       <form action="">
//         <h1>Student Registration</h1>
//         <input
//           type="text"
//           required
//           placeholder="Student Name"
//           pattern="[A-Za-z A-Za-z]+"
//         />
//         <input
//           type="text"
//           required
//           placeholder="College ID"
//           pattern="[A-Z]{1}[0-9]{6}"
//         />
//         <input
//           type="text"
//           required
//           placeholder="Roll No"
//           pattern="[0-9]{2}[A-Z]{5}[0-9]{3}"
//         />
//         <select required>
//           <label htmlFor="">Select your Semester</label>
//             <option selected disabled value="Year">Semester</option>
//             <option value="First">First</option>
//             <option value="Second">Second</option>
//             <option value="Third">Third</option>
//             <option value="Fourth">Fourth</option>
//         </select>
      
//          <input type="email" required placeholder="Email" />
//         <input type="password" required placeholder="Password" />
//         <input type="password" required placeholder=" Confirm Password" />
//         <input
//           type="file"
//           required
//         />
//         <input
//           type="submit"
//           value="Submit"
//           onClick={handleSubmit}
//         />
//       </form>
//       {/* {users.map(user => <div>{user.year}-{user.subject}-{user.section}</div>)} */}
//       </>
      

//   )
// }

// export default Student
import React from 'react';
import { useNavigate } from 'react-router';
import './student.css'; // Import the CSS file

const Student = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <header>
        <h1>CSE Department</h1>
      </header>
      <div className="registration-form">
        <h1>Student Registration</h1>
        <form>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              id="studentName"
              required
              placeholder="Enter student name"
              pattern="[A-Za-z A-Za-z]+"
            />
          </div>
          <div className="form-group">
            <label htmlFor="collegeID">College ID</label>
            <input
              type="text"
              id="collegeID"
              required
              placeholder="Enter college ID"
              pattern="[A-Z]{1}[0-9]{6}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="rollNo">Roll No</label>
            <input
              type="text"
              id="rollNo"
              required
              placeholder="Enter roll number"
              pattern="[0-9]{2}[A-Z]{5}[0-9]{3}"
            />
          </div>
          <div className="form-group">
            <label htmlFor="semester">Select your Semester</label>
            <select id="semester" required>
              <option value="" disabled hidden>Select Semester</option>
              <option value="First">First</option>
              <option value="Second">Second</option>
              <option value="Third">Third</option>
              <option value="Fourth">Fourth</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="Enter email" />
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
            <input type="file" id="file" required />
          </div>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Student;

