
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Wrapper } from './style';
// import { Faculty } from '../faculty'

export const Register = ({ role, setRole}) => {


  const navigate = useNavigate()

  const roleChange = (selectedRole) => {
    
    setRole(selectedRole)
  if(selectedRole === "Faculty"){
  navigate("/faculty")
  }
  else{
  navigate("/student")
 }
};
  return (
    <Wrapper>
     <div className="role-buttons">
        <button
          className="faculty-button"
          onClick={() => roleChange('Faculty')}
        >
          Register as Faculty
        </button>
        <button
          className="student-button"
          onClick={() => roleChange('Student')}
        >
          Register as Student
        </button>
      </div>
   
   </Wrapper>
  )
 
};
export default Register;
