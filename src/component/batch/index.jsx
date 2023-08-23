// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
// import './batch.css'

// const Batch = () => {

//   const [activeSection, setActiveSection] = useState(''); // State to track active section

//   const sections = ['I', 'II', 'III', 'IV'];

//   const handleSectionClick = (section) => {
//     setActiveSection(section);
//   };
//   return (



// <div>
// <table>
//   <tbody>
//     <tr>
//       {sections.map((section) => (
//         <th key={section}>
//           <button onClick={() => handleSectionClick(section)}>
//             {section}
//           </button>
//         </th>
//       ))}
//     </tr>
//   </tbody>
// </table>

// <input type="search" name="" id="" />
// <input type="button" value="search" />

// <table>
//   <tbody>
//     {sections.map((section) => (
//       <tr
//         key={section}
//         style={{ display: activeSection === section ? 'table-row' : 'none' }}
//       >
//         {Array.from({ length: 4 }, (_, index) => (
//           <th key={index}>
//             <input type="button" value={`CS-${section}-A`} />
//           </th>
//         ))}
//       </tr>
//     ))}
//   </tbody>
// </table>
// </div>
// );
// };

// export default Batch;

import axios from "axios";

export const batch = {
    user : {
        login : payload => axios.post(`https://server-api1-li2k.onrender.com/api/user/login`, payload),
        read : _ => axios.get(`https://server-api1-li2k.onrender.com/api/user/read`)
    },
    getSections : () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data : [{
                    id : 'CS-I-A',
                    name : 'CS-I-A'
                },{
                    id : 'CS-II-A',
                    name : 'CS-II-A'
                },{
                    id : 'CS-III-A',
                    name : 'CS-III-A'
                },{
                    id : 'CS-IV-A',
                    name : 'CS-IV-A'
                },{
                    id : 'IT-I-A',
                    name : 'IT-I-A'
                },{
                    id : 'ME-I-A',
                    name : 'ME-I-A'
                },{
                    id : 'ME-II-A',
                    name : 'ME-II-A'
                },{
                    id : 'ME-III-A',
                    name : 'ME-III-A'
                },{
                    id : 'ME-IV-A',
                    name : 'ME-IV-A'
                },{
                    id : 'EC-I-A',
                    name : 'EC-I-A'
                },{
                    id : 'EE-II-A',
                    name : 'EE-II-A'
                },{
                    id : 'EE-III-A',
                    name : 'EE-III-A'
                },{
                    id : 'EE-IV-A',
                    name : 'EE-IV-A'
                }]
            })
        },1000)
    })
}

