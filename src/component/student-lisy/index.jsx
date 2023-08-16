import React from 'react'
import { useDispatch } from 'react-redux'

const StudentList = () => {
    
    const dispatch = useDispatch();
    const add = ()=>{
        dispatch({
            type:"ADD_STUDENT",
            payload: {year,section,subject}
        })
} 
 return (
    <div>
      <form action="">
        
      </form>
    </div>
  )
}

export default StudentList
