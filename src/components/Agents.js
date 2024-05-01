import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddAgent from "./AddAgent";

function Agents({ agents, updateAgent }) {
  const [editingAgentId, setEditingAgentId] = useState(null);
  const [editedAgentData, setEditedAgentData] = useState({
    name: "",
    picture: "",
    years_worked: "",
    deals_closed: "",
  });

  // Function to add a new agent to the list of agents
  function newAgent(a) {
    updateAgent([...agents, a]);
  }

  // Function to handle the deletion of an agent
  function handleDeleteClick(t) {
    fetch(`http://localhost:9292/agents/${t}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteAgent(t));
  }

  // Function to update the state after an agent is deleted
  function handleDeleteAgent(t) {
    const updatedItems = agents.filter((item) => item.id !== t);
    updateAgent(updatedItems);
  }

  // Function to handle the editing of an agent
  const handleEdit = (agent) => {
    setEditingAgentId(agent.id);
    setEditedAgentData({
      name: agent.name,
      picture: agent.picture,
      years_worked: agent.years_worked,
      deals_closed: agent.deals_closed,
    });
  };

  // Function to handle the update of an agent
  function handleUpdate(agentId) {
    fetch(`http://localhost:9292/agents/${agentId}`, {
      method: "PATCH",
      body: JSON.stringify(editedAgentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => editAgents(r));

    setEditingAgentId(null);
    setEditedAgentData({
      name: "",
      picture: "",
      years_worked: "",
      deals_closed: "",
    });
  }

  // Function to handle input change in the edited agent data
  const handleInputChange = (event) => {
    setEditedAgentData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  // Function to update the list of agents after an agent is edited
  function editAgents(updatedAgents) {
    const updateAgentsProperties = agents.map((element) => {
      if (element.id === updatedAgents.id) {
        return updatedAgents;
      } else {
        return element;
      }
    });
    updateAgent(updateAgentsProperties);
  }

  // Function to render the agent card with edit and delete functionality
  function agentCard(agent) {
    if (editingAgentId === agent.id) {
      return (
        <div key={agent.id} className="agent_card">
          <input
            type="text"
            name="name"
            value={editedAgentData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="picture"
            value={editedAgentData.picture}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="years_worked"
            value={editedAgentData.years_worked}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="deals_closed"
            value={editedAgentData.deals_closed}
            onChange={handleInputChange}
          />
          <button onClick={() => handleUpdate(agent.id)}>Save</button>
        </div>
      );
    } else {
      return (
        <div key={agent.id} className="agent_card">
          <h2>{agent.name}</h2>
          <img src={agent.picture} alt={agent.name} />
          <p>Years Worked: {agent.years_worked}</p>
          <p>Deals Closed: {agent.deals_closed}</p>
          <button onClick={() => handleEdit(agent)}>Edit</button>
          <Link key={agent.id} to={`/agents/${agent.id}`}>
            <h3 className="navi">See {agent.name}'s Listings</h3>
          </Link>
          <button
            className="delete_card"
            onClick={() => handleDeleteClick(agent.id)}
          >
            Delete this Agent
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="agent_list">{agents.map((a) => agentCard(a))}</div>
      <h2>Add Agent</h2>
      <AddAgent newAgent={newAgent} />
    </div>
  );
}

export default Agents;
