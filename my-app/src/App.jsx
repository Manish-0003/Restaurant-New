import React from "react";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </>
  );
};

export default App;
