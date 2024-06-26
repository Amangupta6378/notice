import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleBatch = (e) => setBatch(e.target.value);

  const handleClick = async (e) => {
    e.preventDefault();
    const signData = { name, email, password, batch };
    try {
      const response = await axios.post(
        "http://localhost:5036/api/v1/signup",
        signData
      );
      console.log(response);
      if (response.status === 200) {
        console.log("Signup successful");
        navigate("/login");
      } else {
        console.log("Signup failed with status:", response.status);
        setError(`Signup failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        setError(
          `Signup failed: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        console.error("Request data:", error.request);
        setError("No response received from server. Please try again later.");
      } else {
        console.error("Error message:", error.message);
        setError(`An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Signup</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form>
          <div className="mb-3">
            <label htmlFor="name">
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
              placeholder="Email"
              autoComplete="off"
              name="email"
              value={email}
              onChange={handleEmail}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={handlePassword}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="batch">
              <strong>Batch</strong>
            </label>
            <select
              onChange={handleBatch}
              name="batch"
              value={batch}
              id="batch"
              className="form-control"
            >
              <option value="">Choose your Batch</option>
              <option value="Super60">Super60</option>
              <option value="Uniques 1.0">Uniques 1.0</option>
              <option value="Uniques 2.0">Uniques 2.0</option>
              <option value="The Uniques">The Uniques</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-border border-1 bg-danger text-white mt-3 w-100"
          >
            Sign Up
          </button>
          <div className="mt-3">
            <Link to="/login" className="text-black text-decoration-none">
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
