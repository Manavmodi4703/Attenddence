import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/header"
import Register from "./component/register";
import Student from "./component/student";
import Faculty from "./component/faculty";
import Batch from "./component/batch";


export const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Header/>} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/student" element = {<Student />} />
      <Route path = "/faculty" element = {<Faculty />} />
      <Route path = "/batch" element = {<Batch />} />
    </Routes>
    </BrowserRouter>
  );

}

export default App;
