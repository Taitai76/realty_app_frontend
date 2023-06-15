import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import './App.css'
import Header from './Header'
import Home from "./Home";
import Listings from "./Listings";
import Agents from "./Agents";
import Agent from "./Agent";


function App() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/agents")
      .then((r) => r.json())
      .then((items) => setAgents(items));
  }, []);

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
