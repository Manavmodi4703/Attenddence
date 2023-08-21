import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { StyledFormWrapper } from "./style";

const Home = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const addInfo = (e) => {
    e.preventDefault();
    e.target.value = "Wait";
    e.target.succeed = "true";
    axios
      .post("https://server-api1-li2k.onrender.com/api/user/login", {
        contact,
        password,
      })
      .then((res) => {
        console.log("Details", res.data);
        alert("Logged IN successfully");
        if (res.data.role.toLowerCase() === "faculty") {
          navigate("/batch");
        }
        else if(res.data.role.toLowerCase() === "student"){
          navigate('/student-login')
        }
      })
      .catch((err) => {
        console.log("Error while logging ", err);
        alert("An error occured!Wrong Credentials");
      })
      .finally(() => {
        e.target.value = "Success";
        e.target.succeed = "false";
        setContact("");
        setPassword("");
      });

    
  };

  return (
    <StyledFormWrapper>
      <header className="header">AttendApp</header>
      <form className="login-form" onSubmit={addInfo}>
        <h2>Login</h2>
        <br />
        <input
          type="text"
          id="text"
          required
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="input-field"
        />
        <br />

        <input
          type="password"
          id="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <br />
        {/* <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="input-field"
        >
          <option value={role} disabled>
            ...Select Your Role...
          </option>
          <option value="Faculty">Faculty</option>
          <option value="Student">Student</option>
        </select> */}
        <button type="submit" className="submit-button">
          Login
        </button>
        <br />
        <Link to="/register" className="link">
          New User?
        </Link>
      </form>
      {/* Footer component */}
    </StyledFormWrapper>
  );
};

export default Home;
