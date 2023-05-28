import React, { useEffect, useState } from "react";

function Agents(){
    const [agent, setAgent] = useState([])

    useEffect(()=>{
        fetch(("http://localhost:9292/agents"))
        .then((r) => r.json())
        .then((items) => setAgent(items));
    }, []);
    return(
        <>
        <div className="agent_list">
            {
                agent.map((item)=>(
                    <div className="agent_card">
                        <h3>{item.name}</h3>
                        <img src={item.picture}></img>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Agents;