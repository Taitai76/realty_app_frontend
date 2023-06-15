import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Listings from "./Listings";
import Agents from "./Agents";
import Agent from "./Agent";

function App() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAgents();
  }, []);

  const fetchAgents = async () => {
    const response = await fetch("http://localhost:9292/agents");
    const data = await response.json();
    setAgents(data);
    setLoading(false);
  };

  function updateAgent(a) {
    setAgents(a);
  }

  function updateIndivAgent (a){
    const newAgent = agents.map((element) => {
      if (element.id === a.id) {
        return a;
      } else {
        return element;
      }
    });
    setAgents(newAgent)
  }

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading agents...</p>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/agents"
            element={<Agents agents={agents} updateAgent={updateAgent} />}
          />
          <Route
            path="/agents/:id"
            element={<Agent agents={agents} updateAgent={updateIndivAgent} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
