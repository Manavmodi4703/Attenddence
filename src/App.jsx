import { BrowserRouter, Route, Routes } from "react-router-dom";

import Student from "./component/student";

import Home from "./component/home";
import Footer from "./component/footer";

import { Register } from "./component/register";
//import View from "./component/ViewPage";
import "./App.css";

import ViewAttendance from "./component/ViewPage";
import FacultyLogin from "./component/faculty-login";
import AttendanceSheet from "./component/attendanceSheet";

import FacultyRegistration from "./component/faculty";
import StudentDashboard from "./component/student-dashboard";
import { useState } from "react";


export const App = () => {

  const[role,setRole] = useState("Student")
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home role={role} />}></Route>
        <Route path="/register" element={<Register role={role} setRole={setRole} />} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty" element={<FacultyRegistration />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
       <Route path="studentdashboard" element ={<StudentDashboard/>}></Route>
        <Route path="/view-attendance" element={<ViewAttendance />}></Route>
        <Route path="/attendanceSheet" element = {< AttendanceSheet />}></Route>
        {/* <Route path="/section-students/:sectionId" element={<SectionStudents />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
