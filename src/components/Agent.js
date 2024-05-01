import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddProperty from "./AddProperty";
import Listings from "./Listings";

const Agent = ({ agents, updateAgent }) => {
  const params = useParams();
  const [agent, setAgent] = useState(agents[params.id]);

  // Function to update the listings when a new property is added
  function updateListings(p) {
    const updatedAgent = { ...agent, listings: [...agent.listings, p] };
    setAgent(updatedAgent);
    updateAgent(updatedAgent);
  }

  // Function to edit the listings
  function editListings(updatedListing) {
    const updatedListings = agent.listings.map((listing) =>
      listing.id === updatedListing.id ? updatedListing : listing
    );
    const updatedAgent = { ...agent, listings: updatedListings };
    setAgent(updatedAgent);
    updateAgent(updatedAgent);
  }

  // Function to handle the deletion of a listing
  function handleDeletedItem(deletedItem) {
    const updatedListings = agent.listings.filter(
      (listing) => listing.id !== deletedItem.id
    );
    const updatedAgent = { ...agent, listings: updatedListings };
    setAgent(updatedAgent);
    updateAgent(updatedAgent);
  }

  // Mapping the agent's listings to individual Listings components
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
