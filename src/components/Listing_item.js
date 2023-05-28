import React from "react";

function Listing_item({listing, onDeleteItem}){

    function handleDeleteClick() {
        fetch(`http://localhost:9292/listings/${listing.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteItem(listing));
      }

    return(
        <div className="card">
            <button className="delete_card" onClick={handleDeleteClick}>X</button>
            <img src={listing.picture}></img>
            <div className="details">
                <span className="price">${listing.asking_price}<br/></span>
                <span className="location">{listing.address}</span>
            </div>
        </div>
    )
}
export default Listing_item;