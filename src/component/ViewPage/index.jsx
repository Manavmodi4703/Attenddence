import React from 'react'
import { useNavigate } from 'react-router';

const View = () => {
    const navigate = useNavigate();
  const add=(e)=>{
    e.preventDefault()
    navigate('/view-attendance')
  }
  return (
    <div>
     
   
    </div>
  )
}

export default View
