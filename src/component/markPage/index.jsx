import React, { useState } from 'react';
import './Mark.css';
import { useNavigate } from 'react-router';
import ViewAttendance from '../ViewPage';

const Mark = () => {
  const students = ['Student1', 'Student2', 'Student3', 'Student4',
  'Student5','Student6','Student7','Student8','Student9','Student10'];

  const [attendance, setAttendance] = useState({});
  const navigate = useNavigate();

  const markAttendance = (student, status) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [student]: status,
    }));
  };



  const handleNavigation = () => {
    navigate('/mark-attendance');
  };
  
  return (
    <div className="attendance-page">
      <h1>Attendance Page for </h1>
      <div className="student-list">
        <ol>
          {students.map((student) => (
            <li key={student} className="student-item">
              {student}
              <div className="buttons">
                <button
                  className={`absent-btn ${attendance[student] === 'Absent' ? 'active' : ''}`}
                  onClick={() => {
                    markAttendance(student, 'Absent');
                    handleNavigation();
                  }}
                >
                  Absent
                </button>
                <button
                  className={`present-btn ${attendance[student] === 'Present' ? 'active' : ''}`}
                  onClick={() => {
                    markAttendance(student, 'Present');
                    handleNavigation();
                  }}
                >
                  Present
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <ViewAttendance attendance={attendance} />
    </div>
    
  );
};

export default Mark;


