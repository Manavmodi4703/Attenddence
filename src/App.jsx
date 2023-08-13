import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./component/register";
import Student from "./component/student";
import Faculty from "./component/faculty";
import Batch from "./component/batch";
import Home from "./component/home"
import Footer from "./component/footer";


export const App = () => {

  return (
    <BrowserRouter>
    <Routes>
    
   
    <Route path="/" element = {<Home/>}></Route>
      <Route path = "/register" element = {<Register />} />
      <Route path = "/student" element = {<Student />} />
      <Route path = "/faculty" element = {<Faculty />} />
      <Route path = "/batch" element = {<Batch />} />
      
    </Routes>
    <Footer/>
    </BrowserRouter>
  );

}

export default App;
