import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProperty from "./AddProperty";
import Listings from "./Listings";


const Agent = () => {
    const [listings, setAgents] = useState([]);

    const params = useParams()

    useEffect(() => {

      fetch(`http://localhost:9292/agents/${params.id}`)
        .then((r) => r.json())
        .then(items => setAgents(items.listings));
    }, []);

    function updatedListings(p){
        setAgents(...listings, p)
    }

    const list = listings.map((l) => <Listings key={l.id} listing={l} />);

    return (
      <div className="listing_list">
        {list}
        <AddProperty newerlist={updatedListings} />
      </div>
    );
}

export default Agent
