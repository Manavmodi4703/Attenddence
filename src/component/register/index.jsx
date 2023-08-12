import React, { useState } from 'react';
import { useNavigate } from 'react-router';
// import { Faculty } from '../faculty'

const Register = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);

    if (selectedRole === "Faculty") {
      navigate('/faculty'); // Assuming the route for the Faculty component is '/faculty'
    }
    else if(selectedRole === "Student"){
      navigate('/student')
    }
  };

  return (
    <select value={role} onChange={handleRoleChange}>
      <option disabled value="">Select Your Role</option>
      <option value="Faculty">Faculty</option>
      <option value="Student">Student</option>
    </select>
  );
};

export default Register;

