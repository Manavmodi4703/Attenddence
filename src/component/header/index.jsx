import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({addOne}) => {
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
          onClick={add}
        />
      </form>
      <footer>
        <Link to="/register">Register</Link>
      </footer>
    </>
  );
};

export default Header;
