import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects/Projects";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      
    </Routes>
  );
};

export default AppRoutes;