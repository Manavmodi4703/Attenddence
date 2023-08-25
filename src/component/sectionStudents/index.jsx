import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../services';

const SectionStudents = () => {
  const { sectionId } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    services.getStudentsforSection(sectionId)
      .then(res => {
        setStudents(res.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, [sectionId]);

  const handleMarkAttendance = (studentId) => {
    // Call your markAttendance API with the appropriate parameters
    services.user.markAttendance();
    console.log(`Marking attendance for student ${studentId}`);
  };

  return (
    <div>
      <h2>Students in Section {sectionId}</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}
            <button onClick={() => handleMarkAttendance(student.id)}>Mark Attendance</button>
          </li>
        ))}
      </ul>
      {/* Add other buttons here */}
    </div>
  );
};

export default SectionStudents;
