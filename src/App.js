import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import HotelList from "./Pages/Hotel List/HotelList";
import Hotel from "./Pages/Hotel/Hotel";
import React from "react";
import Navbar from "./Components/Navbar/Navbar/Navbar";
import './App.css'
const App=()=> {
  return (
   
    <BrowserRouter>
 
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelList/>}/>
          <Route path="/hotel" element={<Hotel/>}/>
          
      </Routes>
    </BrowserRouter>
  );
}

export default App
