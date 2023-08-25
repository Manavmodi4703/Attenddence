import React, { useEffect, useState } from 'react'
import { services } from '../../services'
import { useNavigate } from 'react-router'

const AttendanceSheet = () => {

    let sectionId = new URLSearchParams(window.location.search).get('sectionId')
   let subjectId = new URLSearchParams(window.location.search).get('subjectId')
    let date = new Date();
    let Attendance = {
      subjectId: '',
      sectionId: '',
      attendance:{
        sectionId:{
          subjectId:{
            date: ['true','false']
          }
        }

      }
    }

    const [students, setStudents] = useState([])
    const [attendance,setAttendance] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        services.user.read()
        .then(res => {
          const studentList = res.data.filter(user => user.role && user.role.toLowerCase() === 'student' && user.section === sectionId)
            setStudents(studentList)
            setAttendance(new Array(studentList.length).fill(false));

        }).catch((err)=>{
          alert("error in fetching" ,err)
        })
    }, [sectionId])

    const MarkAttendance = () => {
      // const payload = {
      //   sectionId: sectionId,
      //   subjectId: subjectId,
      //   attendance: attendance.map(status => status ? "true" : "false")
      // };
      
    services.user.markAttendance({sectionId,subjectId,attendance})
    .then((res) =>{
      console.log("Attendance successful",res.data);
    }).catch(err =>{
      console.log("error in marking ",err)
    })
  }


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
      <button className="mark-button" onClick={MarkAttendance}>Submit Attendance </button>
    </div>


  )
}


export default AttendanceSheet;
