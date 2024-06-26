import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (email && password) {
      try {
        const response = await axios.post(
          "http://localhost:5036/api/v1/login",
          { email, password }
        );

        if (response.data.user.role === "teacher") {
          navigate("/teacher");
        } else if (response.data.user.role === "student") {
          navigate("/student");
        } else if (response.data.user.role === "Admin") {
          navigate("/admin");
        } else {
          alert("Role not recognized");
        }

        if (response.status === 200) {
          console.log("Successfully logged in.");
        } else {
          alert("Incorrect username or password");
          console.log("Password or username is incorrect");
        }
      } catch (err) {
        console.error("Error:", err.response || err.message);
        console.error("Login failed");
      }
    } else {
      console.error("Email and password are required");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form>
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
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={password}
              onChange={handlePassword}
              className="form-control rounded-0"
            />
          </div>

          <button
            className="btn btn-border border-1 bg-danger text-white"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
