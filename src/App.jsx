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
import Header from "./component/header";
import FacultyRegistration from "./component/faculty";

export const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty" element={<FacultyRegistration />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
       
        <Route path="/view-attendance" element={<ViewAttendance />}></Route>
        <Route path="/attendanceSheet" element = {< AttendanceSheet />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
