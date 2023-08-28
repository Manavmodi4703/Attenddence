import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { StyledFormWrapper } from "./style";
// import Faculty from "../faculty";

import { services } from "../../services";


const Home = ({role}) => {
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");




  const navigate = useNavigate();

  const addInfo = (e) => {
   e.preventDefault()
    e.target.value = "Wait";
    e.target.succeed = true;

  services.user.login({
        contact,
        password
      })
      .then((res) => {
        console.log("Details", res.data);
        console.log(role);
        window.localStorage.setItem( "USER", JSON.stringify(res.data.user))
        console.log(res.data.user.role)
        alert("Logged IN successfully");
        if (res.data.user.role.toLowerCase() === "student") {
          navigate("/studentdashboard");
        }
        else {
          navigate("/faculty-login")
        }
      })
      .catch((err) => {
        console.log("Error while logging ", err);
        alert("An error occured! Wrong Credentials");
      })
      .finally(() => {
        e.target.value = "Success";
        e.target.succeed = false;
        setContact("");
        setPassword("");
      });
    
  };

  return (
    <StyledFormWrapper>
      <header className="header">AttendApp</header>
      <form className="login-form" >
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
        <Link to="/forgot-password" className ="forgot" >Reset password</Link>
        <br />

        <button type="submit" className="submit-button" onClick={addInfo}>
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
