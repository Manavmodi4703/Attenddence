// import React, { useEffect, useState } from 'react';


// import axios from "axios";

// const Mark = () => {

// const [myData, setMyData] = useState([])
// useEffect(() => {
//   axios.get
//   ("https://quizattendace.onrender.com/api/user/read")
//   .then((res) =>
//   setMyData(res.data.filter(user => user.role === 'student'))
//   );
// }, []);

// return (
//   <>
//     {myData.map((post) => {
//       const {name,id,rollNo,role} = post;
//       return (
//         <div className='data' key={id} >
//           <h2>{name}</h2>
//           </div>
//       )
//     })}
//     </>
//   )
//   };
// export default Mark;

import React, { useEffect, useState } from 'react'
import { services } from '../../services'

const MarkAttendance = () => {

  const[attendance,setAttendance] = useState("")
  const[sectionId,setSectionId] = useState("")
  const[subjectId,setSubjectId] = useState("")

  useEffect(() =>{
    services.user.markAttendance({sectionId,subjectId,attendance})
    .then((res) =>{
      
    })
  })
  return (
    <div>
      
    </div>
  )
}

export default MarkAttendance
