import { BrowserRouter, Route, Routes } from "react-router-dom";


import Student from "./component/student";
import Faculty from "./component/faculty";
import Batch from "./component/batch";
import Home from "./component/home"
import Footer from "./component/footer";
//import Mark from "./component/markPage";
import { Register } from "./component/register";
//import View from "./component/ViewPage";
import "./App.css"
//import ParentComponent from "./component/parent-component";


import Mark from "./component/markPage";
import ViewAttendance from "./component/ViewPage";


export const App = () =>{



  return (
    <BrowserRouter>
    <Routes>
    
   
    <Route path="/" element = {<Home/>}></Route>
      <Route path = "/register" element = {<Register />} />
      <Route path = "/student" element = {<Student />} />
      <Route path = "/faculty" element = {<Faculty />} />
      <Route path = "/batch" element = {<Batch />} />
     <Route path="/mark-attendance" element = {<Mark/>}></Route>
     <Route path="/view-attendance" element = {<ViewAttendance/>}></Route>
     
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  
  );

};


export default App;
