
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./faculty.css";
import axios from "axios";

const Faculty = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [id, setId] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const [role,setRole] = useState("Faculty");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.value = "Loading";
    e.target.succeed = "true";
    
    if(password !== confirmPassword){
      alert("Passwords don't match")
    }
    axios
      .post("https://server-api1-li2k.onrender.com/api/user/add", {
        name,
        contact,
        password,
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
        e.target.value = "u r registered";
        e.target.succeed = "false";
        setName("");
        setContact("");
        setId("");
        setPassword("");
        setConfirmPassword("");
        setRole("")
      });
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
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Faculty name"
              pattern="[A-Za-z A-Za-z]+"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              required
              id="contact"
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact"
            />
          </div>
          <div className="form-group">
            <label htmlFor="ID">ID</label>
            <input
              type="text"
              id="ID"
              value ={id}
              required
              placeholder="Enter ID"
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Set Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
       

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Faculty;
