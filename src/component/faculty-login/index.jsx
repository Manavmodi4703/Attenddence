

import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import { services } from '../../services';
import {  useNavigate } from 'react-router';


const FacultyLogin = (setSelectedRole) => {
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState([]);
 
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("USER")) window.location = "/";
  }, []);

  
  
  useEffect(() => {
    setLoading(true)
    services.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
      setLoading(true)
    })
  },[]);
 

  const filter = (e) => {
    setFilteredSections([...sections].filter(section => section.name.toLowerCase().startsWith(e.target.value.toLowerCase())))
  }

  const gotoSheet = () => {
    if(selectedSection && selectedSubject){
    navigate(`/attendanceSheet?sectionId=${selectedSection}&subjectId=${selectedSubject}` )
    }
    else{ 
      alert("Section or subject not Selected");}
  }

  
    const handleLogout = ()=> {
      localStorage.clear();
        window.location = '/'
    }


  return (
    <Wrapper>
   

      <section>
      <div className="inner">
      
        <a href="#logout" onClick={handleLogout}>
          <input className="logoutbtn" type="button" value="Logout" />
        </a>
         
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
       
    
            <select value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="Dbms">Dbms</option>
              <option value="OOPS">Oops</option>
              <option value="DSA">DSA</option>
              <option value="Software Engineering">Software Engineering</option>
             
            </select>
            <div className="sections">
            {filteredSections.map(section => (
              <div key={section.id} className="section">
                <input type="button" value={section.name} onClick={() => setSelectedSection(section.id)} />
              </div>
            ))}
           
          </div>
          <button onClick={gotoSheet}>Go to Attendance Sheet</button>
      
      </section>
    
    


    </Wrapper>
  );
};


export default FacultyLogin;
