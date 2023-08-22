
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './student.css'; 
import axios from 'axios';

const Student = () => {
  const navigate = useNavigate();
  const [name,setName] = useState('')
  const[id,setId] = useState('') 
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const[rollNo,setRollNo] = useState('');
  const[semester,setSemester] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] =useState("Student")

  const handleSubmit1 = (e) => {
    e.preventDefault();
    e.target.value = "Loading";
    e.target.succeed = "true";

    if(password !== confirmPassword){
      alert("Passwords don't match")
    }

    axios
      .post("https://server-api1-li2k.onrender.com/api/user/add", 
      {
        name,
        contact,
        password,
        id,
        rollNo,
        semester,
        role
      })
      .then((res) => {
        console.log(res.data);
        alert("you are successfully registered");
        navigate("/");
      })
      .catch((err) => {
        console.log("error in registering", err);
      })
      .finally(() => {
        e.target.value = "Registered";
        e.target.succeed = "false";
        setName("");
        setContact("");
        setPassword("");
        setRollNo("");
        setId("");
        setSemester("")
        setRole("")
      });
    
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setId(e.target.value)}
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
              onChange={(e) =>setRollNo(e.target.value)}
            />
          </div>
       <div className='form-group'>
        <label htmlFor="semester">Year</label>
        <input 
        type="text" 
        id="year"
        required
        placeholder='1st/2nd/3rd/4th'
        onChange={(e) => setSemester(e.target.value)}
        />

       </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
            type="text"
            id="contact" 
            required 
            placeholder="Enter Contact"
            onChange={(e)=>setContact(e.target.value)}
             />

          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              required
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit1}>
            Submit
          </button> 
          </form>
       </div>
       </div>
    
  );
};

export default Student;

