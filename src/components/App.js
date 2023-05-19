import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import './App.css'
import Header from './Header'
import Home from "./Home";
import Listings from "./Listings";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/listings" element={<Listings/>}/>
    </Routes>
    </>
  )
    
}

export default App;
