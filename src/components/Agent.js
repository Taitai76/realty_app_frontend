import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Agent = () => {
    const [agents, setAgents] = useState([]);

    const params = useParams

    useEffect(() => {
      fetch(`http//:localhost:9292/agents/${params.id}`)
        .then((r) => r.json())
        .then((items) => console.log(items));
    }, []);

    return (
    <div>

    </div>
  );
}

export default Agent
