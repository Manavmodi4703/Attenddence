import React, { useState } from "react";
import { services } from "../../services";
import { useNavigate } from "react-router-dom";
import {Wrapper} from "./style";

const ForgotPassword = () => {
  const [contact, setContact] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleResetPassword = () => {
    const payload = {
      contact: contact,
    };
    services.user
      .read(payload)
      .then((response) => {
        setMessage("Enter new password.");
      })
      .catch((error) => {
        setMessage(
          "Error reseting password. Please check your contact and try again."
        );
      });
  };

  const handleNewPasswordSubmit = () => {
    const payload = {
      contact: contact,
      password: newPassword,
    };

    services.user
      .resetPassword(payload)
      .then((response) => {
        alert(" Successfully Updated ! Login In.");
        navigate("/");
      })
      .catch((error) => {
        alert("Error updating password. Please try again.");
      });
  };
  return (
    <Wrapper>
      <h2>Forgot Password</h2>
      <div className="input">
        <input
          type="text"
          placeholder="Enter your contact"
          value={contact}
          required
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <button  onClick={handleResetPassword}>Reset Password</button>
      <p>{message}</p>
      {message && (
        <div className="forgotInput">
          
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handleNewPasswordSubmit}>Update Password</button>
        </div>
      )}
    </Wrapper>
  );
};

export default ForgotPassword;