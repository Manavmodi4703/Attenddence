import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
// import { Faculty } from '../faculty'

export const Register = () => {


  const [role, setRole] = useState(null)
  const navigate = useNavigate()

  const roleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole)
if(selectedRole === "Faculty"){
  navigate("/faculty")
 }
 else{
  navigate("/student")
 }
};
  return (
    <select value={role} onChange={roleChange}>
      <option disabled selected value="select your role">Select Your Role</option>
      <option value="Faculty" >Faculty</option>
      <option value="Student" >Student</option>
    </select>
  )
};
export default Register;
