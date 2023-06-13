import React, { useEffect, useState } from "react";
import AddProperty from "./AddProperty";
import Listing_item from "./Listing_item";

function Listings({listing}){
  // const [listing, setListing] = useState([])
  const [editingProperty, setEditingProperty] = useState(null);
  const [newAddress, setNewAddress] = useState(listing.address);
  const [newAskingPrice, setNewAskingPrice] = useState(listing.asking_price);
  const [newSqft, setNewSqft] = useState(listing.sqft);

  // useEffect(()=>{
  //     fetch(("http://localhost:9292/listings"))
  //     .then((r) => r.json())
  //     .then((items) => setListing(items));
  // }, []);

  // function editUpdatedListing(updatedLisitng){
  //     const updateListingProperties = listing.map(element => {
  //         if(element.id === updatedLisitng.id){
  //             return updatedLisitng
  //         }else{
  //             return element
  //         }
  //     }
  //     );
  //     setListing(updateListingProperties)
  // }

  // function updatedListings(added){
  //     setListing([...listing, added])
  // }

  // function updatedUndeletedListings(x){
  //     setListing(x)
  // };

  // function handleDeleteItem(deletedItem) {
  //     const updatedItems = listing.filter((item) => item.id !== deletedItem.id);
  //     updatedUndeletedListings(updatedItems);
  // };

  function handleDeleteClick() {
    fetch(`http://localhost:9292/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log(listing));
  }

  const handleEdit = (listing) => {
    setEditingProperty(listing);
  };

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
      .then((r) => console.log(r));

    setEditingProperty(null);
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
    <>
    {renderCard}
      {/* <div className="card">
        <img src={listing.picture}></img>
        <div className="details">
          <span className="price">
            ${listing.asking_price.toLocaleString()}
            <br />
          </span>
          <span className="location">
            {listing.address}
            <br />
          </span>
          <span className="location">
            Built in: {listing.year_built}
            <br />
          </span>
          <span className="location">
            {listing.sqft} Sq. ft
            <br />
          </span>
        </div>
      </div> */}
      {/* <h2>Manage Listings</h2>
        {
            listing.map((item)=>(
                <Listing_item 
                key={item.id}
                listing={item}
                onDeleteItem={handleDeleteItem}
                updateListing={editUpdatedListing}
                />
            ))
        } */}
      <h2>Add New Property for this Agent</h2>
      <AddProperty />
      {/* newerlist={updatedListings} */}
    </>
  );
}

export default Listings;