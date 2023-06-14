import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProperty from "./AddProperty";
import Listings from "./Listings";


const Agent = () => {
  const [listings, setAgents] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/agents/${params.id}`)
      .then((r) => r.json())
      .then((items) => setAgents(items.listings));
  }, []);

  function updateListings(p) {
    setAgents([...listings, p]);
  }

  function editListings(updatedLisitng) {
    const updateListingProperties = listings.map((element) => {
      if (element.id === updatedLisitng.id) {
        return updatedLisitng;
      } else {
        return element;
      }
    });
    setAgents(updateListingProperties);
  }

  function handleDeletedItem(deletedItem) {
    const updatedItems = listings.filter((item) => item.id !== deletedItem.id);
    setAgents(updatedItems);
  }

  const list = listings?.map((l) => (
    <Listings 
    key={l.id} 
    listing={l} 
    editListings={editListings} 
    deletedListing={handleDeletedItem}/>
  ));
  

  return (
    <div className="listing_list">
      {list}
      <AddProperty newerlist={updateListings} />
    </div>
  );
}

export default Agent
