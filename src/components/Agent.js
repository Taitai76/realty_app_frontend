import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddProperty from "./AddProperty";
import Listings from "./Listings";

const Agent = ({ agents, updateAgent }) => {
  const params = useParams();
  const [agent, setAgent] = useState(agents[params.id]);

  function updateListings(p) {
    const updatedAgent = { ...agent, listings: [...agent.listings, p] };
    setAgent(updatedAgent);
    updateAgent(updatedAgent);
  }

  function editListings(updatedListing) {
    const updatedListings = agent.listings.map((listing) =>
      listing.id === updatedListing.id ? updatedListing : listing
    );
    const updatedAgent = { ...agent, listings: updatedListings };
    setAgent(updatedAgent);
    updateAgent(updatedAgent);
  }

  function handleDeletedItem(deletedItem) {
    const updatedListings = agent.listings.filter(
      (listing) => listing.id !== deletedItem.id
    );
    const updatedAgent = { ...agent, listings: updatedListings };
    setAgent(updatedAgent);
    updateAgent(updatedAgent);
  }

  const list = agent.listings.map((l) => (
    <Listings
      key={l.id}
      listing={l}
      editListings={editListings}
      deletedListing={handleDeletedItem}
    />
  ));

  return (
    <div className="listing_list">
      {list}
      <AddProperty newerlist={updateListings} />
    </div>
  );
};

export default Agent;
