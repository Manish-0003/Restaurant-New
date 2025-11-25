import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleLogin = () => {
    if (!form.email || !form.password) {
      alert("Enter all fields");
      return;
    }

    alert("Login Successful!");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="auth-container">
        <div className="auth-box">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            onChange={handleLogin}
          />
          <button>Login</button>
          <p className="switch-text">
            New User ?{" "}
            <span onClick={() => navigate("/signup")}>Create New Account</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
