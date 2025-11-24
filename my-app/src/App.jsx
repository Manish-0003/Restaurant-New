import React from "react";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Service from "./components/Pages/Services/Service";
import Menu from "./components/Pages/Menu/Menu";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
         <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<div>Gallery Page</div>} />
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </>
  );
};

export default App;
