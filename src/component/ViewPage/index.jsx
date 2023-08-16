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
      <table>
        <thead>
            Student name
        </thead>
        <tbody>Student1</tbody>
        <tbody>Student1</tbody>
        <tbody>Student1</tbody>
        <tbody>Student1</tbody>
        <tbody>Student1</tbody>
        <thead>Marked Attendance</thead>
        <tbody>A</tbody>
        <tbody>A</tbody>
        <tbody>A</tbody>
        <tbody>A</tbody>
        <tbody>A</tbody>
      </table>
    </div>
  )
}

export default View
