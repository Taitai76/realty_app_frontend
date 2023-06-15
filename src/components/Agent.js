import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import AddProperty from "./AddProperty";
import Listings from "./Listings";
import { Link, useLocation } from "react-router-dom";

const Agent = () => {
  
  const [listings, updateAgent] = useState([]);
  const params = useParams();

  //get agents listings
  useEffect(() => {
    fetch(`http://localhost:9292/agents/${params.id}`)
      .then((r) => r.json())
      .then((items) => updateAgent(items.listings));
  }, []);

  function updateListings(p) {
    updateAgent([...listings, p]);
  }

  function editListings(updatedLisitng) {
    const updateListingProperties = listings.map((element) => {
      if (element.id === updatedLisitng.id) {
        return updatedLisitng;
      } else {
        return element;
      }
    });
    updateAgent(updateListingProperties);
  }

  function handleDeletedItem(deletedItem) {
    const updatedItems = listings.filter((item) => item.id !== deletedItem.id);
    updateAgent(updatedItems);
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
