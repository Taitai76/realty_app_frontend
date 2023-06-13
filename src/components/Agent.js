import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Listings from "./Listings";

const Agent = () => {
    const [agent, setAgents] = useState([]);

    const params = useParams()

    useEffect(() => {

      fetch(`http://localhost:9292/agents/${params.id}`)
        .then((r) => r.json())
        .then(items => setAgents(items));
    }, []);

    const list = agent.listings?.map((l) => <Listings key={l.id} listing={l} />);

    return (
      <div className="listing_list">
        {list}
      </div>
    );
}

export default Agent
