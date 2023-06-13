import React, { useEffect, useState } from "react";
import Agent from "./Agent";
import { Link } from "react-router-dom";
function Agents(){
    const [agents, setAgents] = useState([]);

    useEffect(() => {
      fetch("http://localhost:9292/agents")
        .then((r) => r.json())
        .then((items) => setAgents(items));
    }, []);

    const agentCard = agents.map((agent) => (
      <div className="agent_list">
        <div className="agent_card">
          <img src={agent.picture}></img>
          <h3>{agent.name}</h3>
          <h3>Agent ID: {agent.id}</h3>
          <p>Years Works: {agent.years_worked}</p>
          <br />
          <p>Deals Closed: {agent.deals_closed}</p>
          <Link key={agent.id} to={`/agents/${agent.id}`}>
            <h3 className="navi">See {agent.name}'s Listings</h3>
          </Link>
        </div>
      </div>
    ));

    return (
      <>
        {agentCard}
      </>
    );
}
export default Agents;