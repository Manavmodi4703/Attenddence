import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Mark.css'; // Import the CSS file

const Mark = () => {
  const students = ['Student1', 'Student2', 'Student3', 'Student4'];
  const [attendance, setAttendance] = useState({});

  const markAttendance = (student, status) => {
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [student]: status
    }));
  };

  return (
    <div className="attendance-page">
      <h1>Attendance Page</h1>
      <div className="student-list">
        <ol>
          {students.map(student => (
            <li key={student} className="student-item">
              {student}
              <div className="buttons">
                <button className="absent-btn" onClick={() => markAttendance(student, 'Absent')}>
                  Absent 
                </button>
                <button className="present-btn" onClick={() => markAttendance(student, 'Present')}>
                  Present
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Mark;
