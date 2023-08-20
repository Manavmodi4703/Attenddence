// import React from 'react';
// import { useNavigate } from 'react-router';


// const ViewAttendance = ({ students }) => {

//   const navigate = useNavigate()
 

//   navigate("/mark-attendance")
  
//   return (
//     <div>
//       <h2>View Attendance</h2>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>
//             {student.name} - {student.attendance}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewAttendance;
import React from 'react';

const ViewAttendance = ({ attendance }) => {
  return (
    <div className="view-attendance">
      <h2>View Attendance</h2>
      <ul>
        {Object.keys(attendance).map((student) => (
          <li key={student}>
            {student}: {attendance[student]}
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ViewAttendance;


