import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import './App.css'
import Header from './Header'
import Home from "./Home";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    </>
  )
    
}

export default App;
