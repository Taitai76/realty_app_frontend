import React, { useEffect, useState } from "react";

const Listings = ({ listing, editListings, deletedListing }) => {
  const [editingProperty, setEditingProperty] = useState(null);
  const [newAddress, setNewAddress] = useState(listing.address);
  const [newAskingPrice, setNewAskingPrice] = useState(listing.asking_price);
  const [newSqft, setNewSqft] = useState(listing.sqft);

  function handleDeleteClick() {
    fetch(`http://localhost:9292/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => deletedListing(listing));
  }

  const handleSave = () => {
    fetch(`http://localhost:9292/listings/${listing.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        asking_price: newAskingPrice,
        address: newAddress,
        sqft: newSqft,
      }),
    })
      .then((r) => r.json())
      .then((r) => editListings(r));

    setEditingProperty(null);
  };

  const handleEdit = (listing) => {
    setEditingProperty(listing);
  };

  const handleCancel = () => {
    setEditingProperty(null);
  };

  function renderCard(listing) {
    if (editingProperty && editingProperty.id === listing.id) {
      return (
        <div className="property-card editing" key={listing.id}>
          <img src={listing.picture}></img>
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={newAskingPrice}
              onChange={(e) => setNewAskingPrice(e.target.value)}
            />
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <input
              type="text"
              value={newSqft}
              onChange={(e) => setNewSqft(e.target.value)}
            />
            <div className="action-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div key={listing.id}>
          <button className="delete_card" onClick={handleDeleteClick}>
            X
          </button>
          <img src={listing.picture}></img>
          <div className="details">
            <span className="price">
              ${listing.asking_price}
              <br />
            </span>
            <span className="location">
              {listing.address}
              <br />
            </span>
            <span className="location">
              Sq.ft {listing.sqft}
              <br />
            </span>
            <button
              className="action-buttons"
              onClick={() => handleEdit(listing)}
            >
              Edit
            </button>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="card">{renderCard(listing)}</div>
    </div>
  );
};

export default Listings
