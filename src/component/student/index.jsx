import React from 'react'
import { useNavigate } from 'react-router'
const Student = () => {

  const navigate = useNavigate();

  const handleSubmit = () =>
  {
    navigate('/');
  }
  return (
    <>
    <header>
      <h1>CSE Department</h1>
    </header>
      <form action="">
        <h1>Student Registration</h1>
        <input
          type="text"
          required
          placeholder="Student Name"
          pattern="[A-Za-z A-Za-z]+"
        />
        <input
          type="text"
          required
          placeholder="College ID"
          pattern="[A-Z]{1}[0-9]{6}"
        />
        <input
          type="text"
          required
          placeholder="Roll No"
          pattern="[0-9]{2}[A-Z]{5}[0-9]{3}"
        />
        <select required>
          <label htmlFor="">Select your Semester</label>
            <option selected disabled value="Year">Semester</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
        </select>
      
         <input type="email" required placeholder="Email" />
        <input type="password" required placeholder="Password" />
        <input type="password" required placeholder=" Confirm Password" />
        <input
          type="file"
          required
        />
        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />
      </form>
      </>

  )
}

export default Student
