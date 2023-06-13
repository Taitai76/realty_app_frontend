import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import './App.css'
import Header from './Header'
import Home from "./Home";
import Listings from "./Listings";
import Agents from "./Agents";
import Agent from "./Agent";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<Agent />} />
      </Routes>
    </>
  );
    
}

export default App;
