import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StyledFormWrapper } from "./style";
// import Faculty from "../faculty";
import { batch } from "../batch";

const Home = () => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const addInfo = (e) => {
    e.preventDefault();
    e.target.value = "Wait";
    e.target.succeed = "true";

  batch.user.login({
        contact,
        password,
      })
      .then((res) => {
        console.log("Details", res.data);
        alert("Logged IN successfully");
        if (res.data.role.toLowerCase() === "student") {
          navigate("/student-login");
        }
        else if(res.data.role.toLowerCase() === "faculty"){
          navigate('/faculty-login')
        }
      })
      .catch((err) => {
        console.log("Error while logging ", err);
        alert("An error occured! Wrong Credentials");
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

        <button type="submit" className="submit-button">
          Login
        </button>
        <br />
        <Link to="/register" className="link">
          New User?
        </Link>
      </form>
     
    </StyledFormWrapper>
  );
};

export default Home;
