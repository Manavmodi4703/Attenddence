import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate()

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

export default Home;
