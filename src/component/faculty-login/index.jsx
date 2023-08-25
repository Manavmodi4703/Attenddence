

import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import { services } from '../../services';
import { Navigate, useNavigate } from 'react-router';


const FacultyLogin = (setSelectedRole) => {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
 
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);
  const navigate = useNavigate()
  

  useEffect(() => {
    setLoading(true)
    services.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
      setLoading(true)
    })
  },[])
 

  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = () => {
    if(selectedSection && selectedSubject){
    navigate(`/attendanceSheet?sectionId${selectedSection} subjectId${selectedSubject}` )
    }
    else{ alert("Section or subject not Selected");}
  }

  
    const handleLogout = ()=> {
      setSelectedRole('')
        window.location = '/'
    }


  return (
    <Wrapper>
      {/* <div className="inner">
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
      </div> */}


         
      <h2>Attendance</h2>
    
      <section>
      <div className="inner">
        <div className='imginner'>
         
      <input
        type="search"
        placeholder='Filter the sections here ...'
        onChange={filter}
      /></div>

      {/* <div className="sections">
      {
        filteredSections.map(section => <input type="button" key={section.id} className='section' value={section.name} onClick={e => gotoSheet(section)}
         />)
        
      }
      </div>
       */}
       <div className="sections">
            <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="Dbms">Dbms</option>
              <option value="OOPS">Oops</option>
              <option value="DSA">DSA</option>
              <option value="Software Engineering">Software Engineering</option>
              {/* Add more subjects as needed */}
            </select>
            {filteredSections.map(section => (
              <div key={section.id} className="section">
                <input type="button" value={section.name} onClick={() => setSelectedSection(section.id)} />
              </div>
            ))}
            <button onClick={gotoSheet}>Go to Attendance Sheet</button>
          </div>
        </div>
      </section>
    
    


    </Wrapper>
  );
};


export default FacultyLogin;
