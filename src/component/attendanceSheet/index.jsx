import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const AttendanceSheet = () => {

    let sectionId = window.location.search.split('=')[1]
   let subjectId = new URLSearchParams(window.location.search).get('subjectId')
    let date = new Date()
    let Attendance = {
      subjectId: '',
      sectionId: '',
      attendance:{
        sectionId:{
          subjectId:{

          }
        }

      }
    }

    const [students, setStudents] = useState([])
    const [attendance,setAttendance] = useState([])

    
    useEffect(() => {
        services.user.read()
        .then(res => {
          const studentList = res.data.filter(user => user.role && user.role.toLowerCase() === 'student')
            setStudents(studentList)
            setAttendance(new Array(studentList.length).fill(false));

        }).catch((err)=>{
          alert("error in fetching" ,err)
        })
    }, [])

    const markAttendance = () => {
      const payload = {
        sectionId: sectionId,
        subjectId: subjectId,
        attendance: attendance.map(status => status ? "true" : "false")
      };
      
    services.user.markAttendance({payload})
    .then((res) =>{
      console.log("Attendance successful",res.data)
    }).catch(err =>{
      console.log("error in marking ",err)
    })


  const toggleAttendance = (studentIndex, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[studentIndex] = status;
    setAttendance(updatedAttendance);
  };

  return (
    <div className="attendance-sheet">
    <h1>Mark Attendance</h1>
    {students.map((student, index) => (
      <div className="student-row" key={student.id}>
        <div className="student-info">
          <img src={student.photoUrl} alt={student.name} />
          <p>{student.name}</p>
        </div>
        <div className="attendance-buttons">
          <button
            className={attendance[index] === true ? "present" : ""}
            onClick={() => toggleAttendance(index, true)}
          >
            Present
          </button>
          <button
            className={attendance[index] === false ? "absent" : ""}
            onClick={() => toggleAttendance(index, false)}
          >
               Absent
            </button>
          </div>
        </div>
      ))}
      <button className="mark-button" onClick={markAttendance}>Submit Attendance </button>
    </div>


  )
}
}

export default AttendanceSheet;
