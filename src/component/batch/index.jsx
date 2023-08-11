import React, { useState } from 'react'

const Batch = () => {
  const[year,setYear] = useState("")

  year=setYear
  return (
    <>
    <form action=''>
    <select required onChange={(e) => setYear(e.target.value)}>
            <option selected disabled value="Year">Select the Year</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
        </select>
    </form>
    </>
  )
}

export default Batch
