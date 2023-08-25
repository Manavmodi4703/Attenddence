// import React, { useEffect, useState } from 'react'
//  import Wrapper from './style'

// import { useNavigate } from 'react-router'
// import { services } from '../../services'

// const FacultyLogin = () => {

//    const [loading,setLoading]= useState(false)

//   const [sections, setSections] = useState([])

//   const [filteredSections, setFilteredSections] = useState(sections)

//   const navigate = useNavigate()

  // useEffect(() => {
  //   setLoading(true)
  //   services.getSections()
  //   .then(res => {
  //     setSections(res.data)
  //     setFilteredSections(res.data)
  //     setLoading(true)
  //   })
  // },[])

 


  

  // const filter = (e) => {
  //   setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  // }

  // const gotoSheet = (section) => {
  //   navigate(`/attendanceSheet?sectionId=${section.id}`)
  // }

  
  //   const handleLogout = ()=> {
  //       window.location = '/'
  //   }
//   return (
//     <Wrapper>
      // <div className="inner">
      //   <a   href="#logout" onClick={handleLogout}><input className='logoutbtn' type="button" value="Logout" /></a>
      // <input
      //   type="search"
      //   placeholder='Filter the sections here ...'
      //   onChange={filter}
      // />

      // <div className="sections">
      // {
      //   filteredSections.map(section => <input type="button" key={section.id} className='section' value={section.name} onClick={e => gotoSheet(section)} />)
      // }
      // </div>
//       </div>
//     </Wrapper>
//   )
// }

// export default FacultyLogin

import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import { services } from '../../services';
import { Navigate, useNavigate } from 'react-router';


const FacultyLogin = () => {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
 
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [filteredSections, setFilteredSections] = useState(sections);
  
  const [subjectsDropdownOpen, setSubjectsDropdownOpen] = useState(false);
  useEffect(() => {
    setLoading(true)
    services.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
      setLoading(true)
    })
  },[])
  const navigate = useNavigate()

  const viewSectionStudents = (section) => {
    navigate(`/section-students/${section.id}`);
  };


  

  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = (section,selectedSubject) => {
    navigate(`/attendanceSheet?sectionId${section.id} ${selectedSubject}` )
  }

  
    const handleLogout = ()=> {
        window.location = '/'
    }



  const subjects = ['JAVA', 'DBMS', 'DCCN'];

  const markAttendance = () => {
    if (!selectedSection || !selectedSubject) {
      alert("Please select a section and a subject.");
      return;
    }

    
    services.user.markAttendance({
      sectionId: selectedSection.id,
      subject: selectedSubject.id,
    })
    .then(() => {
      alert(`Attendance marked for ${selectedSubject}`);
    })
    .catch(error => {
      alert("Error marking attendance: " + error.message);
    });
  };

  return (
    <Wrapper>
      <div className="inner">
        <a href="#logout" onClick={handleLogout}>
          <input className="logoutbtn" type="button" value="Logout" />
        </a>
        <input
          type="search"
          placeholder="Filter the sections here ..."
          onChange={filter}
        />
        <div className="sections">
          {filteredSections.map(section => (
            <div key={section.id} className="section">
              <h3>{section.name}</h3>
              <button onClick={() => viewSectionStudents(section)}>View Students</button>
              {selectedSection === section && (
                <div className="attendance-buttons">
                  <div className="dropdown-container">
                    <button
                      onClick={() => setSubjectsDropdownOpen(!subjectsDropdownOpen)}
                      className="dropdown-toggle"
                    >
                      {selectedSubject || 'Select Subject'}
                    </button>
                    {subjectsDropdownOpen && (
                      <div className="dropdown-menu">
                        {subjects.map(subject => (
                          <button
                            key={subject}
                            onClick={() => {
                              setSelectedSubject(subject);
                              setSubjectsDropdownOpen(false);
                            }}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button onClick={markAttendance} className="attendance-button">
                    Mark Attendance
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default FacultyLogin;
