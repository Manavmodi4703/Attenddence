import React, { useEffect, useState } from 'react'
import { services } from '../../services'
import Wrapper from './style'


const AttendanceSheet = () => {
  
  const [markedPresentCount, setMarkedPresentCount] = useState(0);

    let sectionId = new URLSearchParams(window.location.search).get('sectionId')
   let subjectId = new URLSearchParams(window.location.search).get('subjectId')

   useEffect(() => {
    if (!localStorage.getItem("USER")) window.location = "/";
  }, []);

  const handleLogout = () =>{
    localStorage.clear();
    window.location = "/"
  }
    // let date = new Date();
    // let Attendance = {
    //   subjectId: '',
    //   sectionId: '',
    //   attendance:{
    //     sectionId:{
    //       subjectId:{
    //         date: ['true','false']
    //       }
    //     }

    //   }
    // }

    const [students, setStudents] = useState([])
    const [attendance,setAttendance] = useState([])
    
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
    
      
    services.user.markAttendance({sectionId,subjectId,attendance})
    .then((res) =>{
      console.log("Attendance successful",res.data);
  
      const presentCount = attendance.filter(status => status).length;
      setMarkedPresentCount(presentCount);
      alert(`Attendance Marked Successfully. ${presentCount} students marked present out of ${students.length}`);
    }).catch(err =>{
      console.log("error in marking ",err)
    })  
  }


  const fetchAttendance = (studentIndex, status) => {
    const updatedAttendance = [...attendance];
    updatedAttendance[studentIndex] = status;
    setAttendance(updatedAttendance);
  };

  return (
    <Wrapper>
      <a href="#logout" id='btn' onClick=  {handleLogout}>
          <input className="logoutbtn" type="button" value="Logout" />
        </a>
    <div className="attendance-sheet">
    <h1>Mark Attendance</h1>
    
    {students.map((student, index) => (
      <div className="student-row" key={student.id}>
        <div className="student-info">
        
          <p>{student.name}</p>
        </div>
        <div className="attendance-buttons">
          <button id='present'
            className={attendance[index] === true ? "present" : ""}
            onClick={() => fetchAttendance(index, true)}
          >
            <h3>Present</h3>
          </button>
          <button id='absent'
            className={attendance[index] === false ? "absent" : ""}
            onClick={() => fetchAttendance(index, false)}
          >
               <h3>Absent</h3>
            </button>
          </div>
        </div>
      ))}
      <button className="mark-button" onClick={MarkAttendance}>Submit Attendance </button>
    </div>
    </Wrapper>


  )
}


export default AttendanceSheet;
