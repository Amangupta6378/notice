import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify"
// import { Accordion, AccordionItem } from "react-accessible-accordion";
import BasicExample from "./Accordion";
// import "react-accessible-accordion/dist/fancy-example.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  //   const [data,setData] = useState({})

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleBatch = (e) => {
    setBatch(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const signData = { name, email, password, batch }; // Create an object with the form data

    try {
      const response = await axios.post(
        "http://localhost:5036/api/v1/signup", // Update the URL to match your backend server endpoint
        signData
      );

      console.log(response);
      navigate("/login");

      if (response.status === 200) {
        // Handle successful signup
        console.log("Signup successful");

        // You can add further actions like displaying a success message or redirecting the user
      } else {
        console.log("Signup failed with status:", response.status);
        // Handle other status codes if needed
      }
      // toast.success("user register successfully");
    } catch (error) {
      console.error("Error occurred during signup:", error);

      // toast.error(error, "Not registered");
      // Handle specific error cases here based on error response
      // For example, check error.response.data for detailed error messages from server
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Name"
              autoComplete="off"
              name="name"
              value={name}
              onChange={handleName}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleEmail}
              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password" // Changed to password type for security reasons
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={handlePassword}
              className="form-control rounded-0"
            />
          </div>

          <select
            onChange={handleBatch}
            name="role"
            value={batch}
            id="countries_disabled"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose your Batch</option>
            <option value="Super60">Super60</option>
            <option value="The Uniques">Uniques 1.0</option>
            <option value="academics">Uniques 2.0</option>
          </select>

          <button
            type="button" // Changed to button type to prevent form submission
            onClick={handleClick}
            className="btn btn-border border-1 bg-danger text-white mt-3"
          >
            Sign Up
          </button>

          <div className="bg-white mt-3 rounded w-100">
            <Link
              to="/login"
              className=" text-black text-decoration-none"
            >
              Already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
