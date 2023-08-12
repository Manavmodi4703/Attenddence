import React from 'react'

const Faculty = () => {
  return (
    <>
    <header><h1>CSE Department</h1></header>
      <form action="">
        <h1>Faculty Registration</h1>
        <input
          type="text"
          required
          placeholder="Faculty Name"
          pattern="[A-Za-z A-Za-z]+"
        />
        <input type="text" required placeholder="ID Code" pattern="[0-9]+" />
        <input type="password" required placeholder="Password" />
        <input type="password" required placeholder=" Confirm Password" />
        <input type="email" required placeholder="Email" />
        <input type="file" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Faculty
