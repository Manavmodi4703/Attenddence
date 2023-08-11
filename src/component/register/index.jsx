import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {
  const [role, setRole] = useState("")
  const navigate = useNavigate()
  return (
    <select onChange = {(e) => setRole(e.target.value)}>
        <option disabled selected value="select your role">Select Your Role</option>
        <option value="Faculty">Faculty</option>
        <option value="Student">Student</option>
    </select>
  )
    }

export default Register
