import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Contact from "./Components/Contact";
import SignUp from "./Components/UserInfo";



const RouterApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* react-router-dom v6 */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;