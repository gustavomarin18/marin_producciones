import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BodyHome from "../components/home/BodyHome";
import Navbar from "../components/Navbar/NavBar";
import NotFound from "../components/NotFound/NotFound";




const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/>
 
      <Routes>
   
        <Route path="/" element={<BodyHome />} />
        <Route path="/*" element={<NotFound />} />
    
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
