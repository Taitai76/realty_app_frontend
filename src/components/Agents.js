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
                        <img src={item.picture}></img>
                        <h3>{item.name}</h3>
                        <p>Years Works: {item.years_worked}</p><br/>
                        <p>Deals Closed: {item.deals_closed}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}
export default Agents;