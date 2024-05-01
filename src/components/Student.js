import React from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Student = () => {
  return (
    <div>
        <NavBar />
      <div className="flex">
        <Sidebar />
        <Main/>
      </div>
    </div>
  );
};

export default Student;
