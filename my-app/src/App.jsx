import React from "react";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Pages/About/About";
import Service from "./components/Pages/Services/Service";
import Menu from "./components/Pages/Menu/Menu";
import { CartProvider } from "./CartContext";
import Cart from "./components/Pages/Cart/CART.JSX";
import Checkout from "./components/Pages/CheckOut/Checkout";
import OrderSuccess from "./components/Pages/OrderSuccess/OrderSuccess";
import Signup from "./components/Pages/Signup/Signup";
import Login from "./components/Pages/Login/Login";

const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<div>Gallery Page</div>} />
          <Route path="/cart" element={<Cart />} />
          
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
