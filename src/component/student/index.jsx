
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import axios from 'axios';
import { Wrapper } from './style';


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
      .post("https://quizattendace.onrender.com/api/user/add", 
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
    <Wrapper>
    <div className="container">
    
      <div className="registration-form">
        <h1>Student Registration</h1>
        <form>
          <div className="form-group">
            <label htmlFor="studentName">Student Name</label>
            <input
              type="text"
              value={name}
              id="studentName"
              required
              placeholder="Enter student name"
             pattern="[A-Za-z A-Za-z]+"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
      
       
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
            type="text"
            id="contact" 
            required 
            pattern = '[0-9]{10}'
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
       </Wrapper>
    
  );
};

export default Student;

