// import React, { useState } from 'react';
// import { Wrapper } from './style';
// import { Link } from 'react-router-dom';
// import { services } from '../../services';

// const StudentDashboard = () => {
//   const [showSubjectSelection, setShowSubjectSelection] = useState(false);
//   const[contact,setContact] =useState()
//   const[year,setYear] =useState()
//   const[section,setSection] = useState()
//   const[branch,setBranch] = useState()
  

//   const handleViewAttendance = () => {
//     setShowSubjectSelection(true);
//   };
//   const handleLogout =()=>{
//     window.location = "/"
//   }

//   const handleSubmit = (e) =>{
//     e.target.value = "loading"
//     e.target.succeed = "true"
//     services.user.update({
//         contact,
//         year,
//         section,
//         branch
//       })
//       .then((res) => {
//         console.log("Updates", res.data);
//         alert("Update successfully");
//       }).catch((err )=>{
//         console.log(err)
//         alert("Error in updating")
//       }).finally(()=>{
//         e.target.value = "Success";
//         e.target.succeed = "false";
//         setContact("");
//         setBranch(" ");
//         setYear(" ");
//         setSection(" ");

//       });

//   }




//   return (
//     <Wrapper>  
//         <div>
//       <header className='header'><Link className='link' to="/studentdashboard">Student Dashboard</Link>
//       <br /> 
//       <a href="#logout" onClick={handleLogout}><input className='logout' type="button" value="logout" /></a>
//       </header>
      
    //   <p>Can I ask some more Details</p>
    //   <br />
    //   <label htmlFor="contact">Enter your contact </label>
    //  <input
    //  type="text"
    //  value={contact}
    //  placeholder='enter your contact' 
    //  onChange={(e)=>setContact(e.target.value)}
    //  pattern='[1-4]{1}[a-z]{2}'
    //  required
    //  />


    // <label htmlFor="year">Enter your Year </label>
    //  <input
    //  type="text"
    //  value={year}
    //  required
    //  placeholder='1st/2nd/3rd/4th' 
    //  onChange={(e)=>setYear(e.target.value)}
    //  pattern='[1-4]{1}[a-z]{2}'
     
    //  />

    // <label htmlFor="section">Enter your Section </label>
    // <input
    // type="text"
    // value={section}
    // required
    // onChange={(e)=>setSection(e.target.value)}
    // placeholder='A/B'
    // />

    // <label htmlFor="branch ">Enter your Branch </label>
    //   <input type="text"
    //   required
    //    onChange={(e)=>setBranch(e.target.value)} 
    //  />


    //   <input type="button" value="Submit" onClick={handleSubmit} />&nbsp; &nbsp;
    //   <input
    //   className=''
    //     type="button"
    //     value="View-Attendance"
    //     onClick={handleViewAttendance}
       
        
       
    //   />
    //    &nbsp; 

//       {showSubjectSelection && (
//         <div>
//           <label htmlFor="">Choose Subject</label>
//           <input type="button" value="JAVA" />
//           <input type="button" value="DBMS" />
//           <input type="button" value="DCCN" />
//         </div>
//       )}
//     </div>
//     </Wrapper>

//   );
// };

// export default StudentDashboard;


import React, { useState } from 'react';
import { Wrapper } from './style';
import { services } from '../../services';

const StudentDashboard = () => {
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);
  const [section,setSection]=useState([]);
  const[year,setYear] =useState()
  const [contact,setContact] = useState()
  const [sectionOptions,setSectionOptions] = useState([])

  const[branch,setBranch] = useState()

  const handleLogout =()=>{

    window.location = "/"
  }
  
  
  const handleViewAttendance = () => {
    setShowSubjectSelection(true);
  };

  const fetchAttendance = subject => {
   
    services.user.readAttendance(subject).then(res => {
      setAttendanceData(res.data);
      setSelectedSubject(subject);
    });
  };

  const handleSubmit = (e) =>{
    e.target.value = "loading"
    e.target.succeed = true
    services.user.update({
        contact,
        year,
        section,
        branch
      })
      .then((res) => {
        console.log("Updates", res.data);
        alert("Update successfully");
      }).catch((err )=>{
        console.log(err)
        alert("Error in updating! Select all fields ",err)
      }).finally(()=>{
        e.target.value = "Success";
        e.target.succeed = false;
        setContact("");
        setBranch("");
        setYear("");
        setSection("");

      });

  }
  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);

    // Update section options based on selected year
    if (selectedYear === 'I') {
      setSectionOptions(['CS-I-A', 'IT-I-A', 'ME-I-A', 'EC-I-A']);
    } else if (selectedYear === 'II') {
      setSectionOptions(['CS-II-A', 'ME-II-A', 'EC-II-A']);
    } else if (selectedYear === 'III') {
      setSectionOptions(['CS-III-A', 'ME-III-A', 'EE-III-A']);
    } else if (selectedYear === 'IV') {
      setSectionOptions(['CS-IV-A', 'ME-IV-A', 'EE-IV-A']);
    } else {
      setSectionOptions([]);
    }
  };

  return (
    <Wrapper>
      <div>
        <header className="header">Student Dashboard</header>
        <br />
        <a href="#logout" onClick={handleLogout}><input className='logout' type="button" value="logout" /></a>
        <p>Can I ask some more Details?</p>

     
      <br />
      <label htmlFor="contact">Enter your contact </label>
     <input
     type="text"
     value={contact}
     placeholder='enter your contact' 
     onChange={(e)=>setContact(e.target.value)}
     pattern='[1-4]{1}[a-z]{2}'
     required
     />


    <label htmlFor="year">Select Year </label>
  <select className='select' name="" id="" onChange={(e)=>handleYearChange(e.target.value)}>
    
  <option value="" disabled selected required>Year...</option>
  <option value="I">I</option>
  <option value="II">II</option>
  <option value="III">III</option>
  <option value="IV">IV</option>

  </select>

 
  <label htmlFor="">Select Section</label>
<select  className='select' name="" id="" onChange={(e) => setSection(e.target.value)}>
  <option disabled selected required value="">..Select Section...</option>
  {sectionOptions.map((sectionOption, index) => (
    <option key={index} value={sectionOption}>
      {sectionOption}
    </option>
  ))}
</select>

    <label htmlFor="branch ">Enter your Branch</label>
      <input type="text"
      required
       onChange={(e)=>setBranch(e.target.value)} 
       placeholder='CS/IT'
     />
<br />

      <input type="button" value="Submit" onClick={handleSubmit} />&nbsp; &nbsp;
      <input
      className=''
        type="button"
        value="View-Attendance"
        onClick={handleViewAttendance}
       disabled
        
       
      />
       &nbsp; 

        {showSubjectSelection && (
          <div>
            <label>Choose Subject:</label>
            <button disabled onClick={() => fetchAttendance('JAVA')}>JAVA</button>
            <button onClick={() => fetchAttendance('DBMS')}>DBMS</button>
            <button onClick={() => fetchAttendance('DCCN')}>DCCN</button>
          </div>

        )}
        {selectedSubject && (
          <div>
            <h3>Attendance for {selectedSubject}:</h3>
            {attendanceData.map((record, index) => (
              <div key={index}>{record.date}: {record.status}</div>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default StudentDashboard;
