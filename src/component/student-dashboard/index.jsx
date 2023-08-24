import React, { useState } from 'react';

const StudentDashboard = () => {
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);

  const handleViewAttendance = () => {
    setShowSubjectSelection(true);
  };
  const handleLogout =()=>{
    window.location = "/"
  }

  return (
    <div>
      <header>Welcome</header>
      <a href="#logout" onClick={handleLogout}><input type="button" value="logout" /></a>
      <p>Can I ask some more Details</p>
      <label htmlFor="year">Enter your Year </label>
     <input type="text"
     placeholder='1st/2nd/3rd/4th' 
     pattern='[1-4]{1}[a-z]{2}'
     required/>
      <label htmlFor="year">Enter your Section </label>
    <input type="text"
    placeholder='A/B'
     />
      <label htmlFor="year">Enter your Branch </label>
      <input type="text" />
      <input
        type="button"
        value="View-Attendance"
        onClick={handleViewAttendance}
      />

      {showSubjectSelection && (
        <div>
          <label htmlFor="">Choose Subject</label>
          <input type="button" value="JAVA" />
          <input type="button" value="DBMS" />
          <input type="button" value="DCCN" />
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
