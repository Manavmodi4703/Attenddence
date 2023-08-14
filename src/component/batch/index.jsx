import React, { useState } from 'react'

const Batch = () => {
  const [year, setYear] = useState("")
  const [section, setSection] = useState("")
  const [subject, setSubject] = useState("")
  
  const selectYear = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
  };
  const selectSection = (e) => {
    const selectedSection = e.target.value
    setSection(selectedSection);
  };
  const selectSubject = (e) => {
    const selectedSubject = e.target.value;
    setSubject(selectedSubject);
  }
  return (
    <>
        <select required value={year} onChange={selectYear}>
          <option selected disabled value="Year">Select the Year</option>
          <option value="First">First</option>
          <option value="Second">Second</option>
          <option value="Third">Third</option>
          <option value="Fourth">Fourth</option>
        </select>
        <select required value={section} onChange={selectSection}>
          <option selected disabled value="Section">Select the Section</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <select required value={subject} onChange={selectSubject}>
          <option selected disabled value="Subject">Select the Subject</option>
          <option value="TOC">TOC</option>
          <option value="DSA">DSA</option>
          <option value="MI">MI</option>
          <option value="DBMS">DBMS</option>
        </select>
        <input type="button" value="Mark" />
        <input type="button" value="View" />
        </>
  )
}
export default Batch;
