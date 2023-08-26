

import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import { services } from '../../services';
import {  useNavigate } from 'react-router';


const FacultyLogin = () => {

  const [sections, setSections] = useState([]);
 
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("USER")) window.location = "/";
  }, []);

  
  
  useEffect(() => {
    
    services.getSections()
    .then(res => {
      setSections(res.data)
      setFilteredSections(res.data)
     
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
      
        <a href="#logout" id='btn' onClick=  {handleLogout}>
          <input className="logoutbtn" type="button" value="Logout" />
        </a>
         
      <input
        type="search"
        placeholder='Filter the sections here ...'
        onChange={filter}
      /></div>

    
       
    
            <select className='select' value={selectedSubject} onChange={e => setSelectedSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="Dccn">Dccn</option>
              <option value="M&I">M&I</option>
              <option value="oops">OOPS</option>
              <option value="java">Java</option>
             
            </select>
            <div className="sections">
            {filteredSections.map(section => (
              <div key={section.id} className="section">
                <input type="button" value={section.name} onClick={() => setSelectedSection(section.id)} />
              </div>
            ))}
           
          </div>
          <input className='listbtn' type="button" value="Student List" onClick={gotoSheet} />
        
      
      </section>
    
    


    </Wrapper>
  );
};


export default FacultyLogin;
