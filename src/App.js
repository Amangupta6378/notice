// import logo from './logo.svg';y
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Letter from './components/Letter';
import Fine from './components/Fine';
import Student from './components/Student';
// import Main from './components/Main'

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Signup />}/>
      
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/fine" element={<Fine/>} />
      <Route path="/student" element={<Student/>} />
      {/* <Route path="/dashboard" element={<Main/>} /> */}
      <Route path="/admin" element={<Home/>} />
    </Routes>

  );
}

export default App;
