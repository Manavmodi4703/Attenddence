import React, { useEffect, useState } from 'react';


import axios from "axios";

const Mark = () => {

const [myData, setMyData] = useState([])
useEffect(() => {
  axios.get
  ("https://server-api1-li2k.onrender.com/api/user/read")
  .then((res) =>
  setMyData(res.data.filter(user => user.role === 'student'))
  );
}, []);

return (
  <>
    {myData.map((post) => {
      const {name,id,rollNo,role} = post;
      return (
        <div className='data' key={id} >
          <h2>{name}</h2>
          </div>
      )
    })}
    </>
  )
  };
export default Mark;