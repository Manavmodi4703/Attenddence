import React from 'react'
const Student = () => {
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
            <option selected disabled value="Year">Semester</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
        </select>
        <input
          type="file"
          required
        />
        <input type="password" required placeholder="Password" />
        <input type="password" required placeholder=" Confirm Password" />
        <input type="email" required placeholder="Email" />
        <input
          type="submit"
          value="Submit"
        />
      </form>
      </>

  )
}

export default Student
