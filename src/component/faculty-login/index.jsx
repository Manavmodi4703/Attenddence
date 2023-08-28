import React, { useState, useEffect } from 'react';
import Wrapper from './style';
import { services } from '../../services';
import { useNavigate } from 'react-router';

const FacultyLogin = () => {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [filteredSections, setFilteredSections] = useState(sections);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('USER')) window.location = '/';
  }, []);

  useEffect(() => {
    services.getSections().then((res) => {
      
      setSections(res.data);
      setFilteredSections(res.data);
    });
  }, []);

  const filter = (e) => {
    setFilteredSections(
      sections.filter((section) =>
        section.name.toLowerCase().startsWith(e.target.value.toLowerCase())
      )
    );
  };

  const showStudentList = (sectionId) => {
    if (selectedSubject && sectionId) {
      setSelectedSection(sectionId);
      navigate(`/attendanceSheet?sectionId=${sectionId}&subjectId=${selectedSubject}`);
    } else {
      alert("Please select both Subject and Section before proceeding.");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location = '/';
  };

  return (
    <Wrapper>
      <section>
        <div className="inner">
          <a href="#logout" onClick={handleLogout}>
            <input className="logoutbtn" type="button" value="Logout" />
          </a>
          <input
            type="search"
            placeholder="Filter the sections here ..."
            onChange={filter}
          />
        </div>

        <select
          className="select"
          required
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="" disabled>
            Select Subject
          </option>
          <option value="Dccn">Dccn</option>
          <option value="M&I">M&I</option>
          <option value="oops">OOPS</option>
          <option value="java">Java</option>
        </select>

        <div className="sections">
          {filteredSections.map((section) => (
            <div
              key={section.id}
              className={`section ${selectedSection === section.id ? 'selected' : ''}`}
            >
              <input
              className='section-btn'
                id={`section-btn-${section.id}`}
                type="button"
                value={section.name}
                onClick={() => showStudentList(section.id)}
              />
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default FacultyLogin;
