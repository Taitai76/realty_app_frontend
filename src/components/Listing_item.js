import React, { useEffect, useState } from "react";

function Listing_item({listing, onDeleteItem}){
    const [editingProperty, setEditingProperty] = useState(null);

    function handleDeleteClick() {
        fetch(`http://localhost:9292/listings/${listing.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteItem(listing));
    }

    const handleEdit = (listing) => {
        setEditingProperty(listing);
      };
    
      const handleSave = () => {
        setEditingProperty(null);
        // Perform save logic here (e.g., update property in the database)
      };
    
      const handleCancel = () => {
        setEditingProperty(null);
      };

    function renderCard(listing){
        if (editingProperty && editingProperty.id === listing.id) {
          return (

            <div className="property-card editing" key={listing.id}>
                <img src={listing.picture}></img>
                <input type="text" value={editingProperty.asking_price} />
                <input type="text" value={editingProperty.address} />
                <input type="text" value={editingProperty.sqft} />
                <div className="action-buttons">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
          );
        } else {
          return (
            <div key={listing.id}>
              <button className="delete_card" onClick={handleDeleteClick}>X</button>
                <img src={listing.picture}></img>
                <div className="details">
                    <span className="price">${listing.asking_price}<br/></span>
                    <span className="location">{listing.address}<br/></span>
                    <span className="location">Sq.ft {listing.sqft}<br/></span>
                    <button className="action-buttons" onClick={() => handleEdit(listing)}>Edit</button>
                </div>
            </div>
          );
        }
    };

    return(
        <div className="card">
            {renderCard(listing)}
        </div>
    )
}
export default Listing_item;