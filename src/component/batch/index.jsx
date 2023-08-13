import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Batch = () => {
  const[year,setYear] = useState("")
  const[section,setSection] = useState("")
  const[subject, setSubject] = useState("")
const navigate = useNavigate() 

  const selectYear = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);

  return (
    <>
    <form action='' value={year} onChange={selectYear}>
    <select required >
            <option selected disabled value="Year">Select the Year</option>
            <option value="First">First</option>
            <option value="Second">Second</option>
            <option value="Third">Third</option>
            <option value="Fourth">Fourth</option>
        </select>
      <select required value={section} onChange={selectYear}>
      <option selected disabled value="Section">Select the Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
      </select>
      <select required value={subject} onChange={selectYear}>
      <option selected disabled value="Subject">Select the Subject</option>
            <option value="TOC">TOC</option>
            <option value="DCCN">DCCN</option>
            <option value="MI">MI</option>
            <option value="DBMS">DBMS</option>
      </select>
    </form>
    </>
  )
}
}
export default Batch;
