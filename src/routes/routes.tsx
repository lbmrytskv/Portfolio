import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects/Projects";
import About from "../components/About";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      
    </Routes>
  );
};

export default AppRoutes;