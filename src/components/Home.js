import React from "react";
import image from "../Images/SVIET.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-100">
      <div className="w-100 flex bg-red-700 ps-5 text-white cursor-pointer">
        <h2 className="mt-1">Notice</h2>
        <div className="flex ms-20 mt-3 font-medium">
          <p className="ms-3">All</p>
          <Link to="/fine" className="text-decoration-none text-white"><p className="ms-5">Fine</p></Link>
          <p className="ms-5">Information</p>
          <p className="ms-5">Academics</p>
        </div>
      </div>

      <div className="flex">
        <div className="m-5">
          <img width="200px" src={image}></img>
          <Link
            to="/letter"
            className="text-decoration-none text-white mt-2 btn btn-danger"
          >
            Edit
          </Link>
        </div>
        <div className="m-5">
          <img width="200px" src={image}></img>
          <Link
            to="/letter"
            className="text-decoration-none text-white mt-2 btn btn-danger"
          >
            Edit
          </Link>
        </div>
        <div className="m-5">
          <img width="200px" src={image}></img>
          <Link
            to="/letter"
            className="text-decoration-none text-white mt-2 btn btn-danger"
          >
            Edit
          </Link>
        </div>
        <div className="m-5">
          <img width="200px" src={image}></img>
          <Link
            to="/letter"
            className="text-decoration-none text-white mt-2 btn btn-danger"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
