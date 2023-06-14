import React, { useEffect, useState } from "react";

const AddAgent = ({ newAgent }) => {
    const [agent, setAgent] = useState({
      name: "",
      picture: "",
      years_worked: "",
      deals_closed: "",
    });

    function handleInputChange(e) {
      const { name, value } = e.target;
      setAgent({ ...agent, [name]: value });
    }

    function handleSubmit(e) {
    e.preventDefault();
    const agentData = {
      name: agent.name,
      picture: agent.picture,
      years_worked: agent.years_worked,
      deals_closed: agent.deals_closed,
    };

    fetch(`http://localhost:9292/agents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agentData),
    })
      .then((r) => r.json())
      .then((r) => newAgent(r));

    setAgent({
      name: "",
      picture: "",
      years_worked: "",
      deals_closed: "",
    });
    }

  return (
    <div>
      <form onSubmit={handleSubmit} className="property-form">
        <label>
          Picture URL:
          <input
            type="text"
            name="picture"
            value={agent.picture}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={agent.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Deals Closed:
          <input
            type="text"
            name="deals_closed"
            value={agent.deals_closed}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Years Works:
          <input
            type="text"
            name="years_worked"
            value={agent.years_worked}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Agent</button>
      </form>
    </div>
  );
}

export default AddAgent;
