import React, { useEffect, useState } from "react";
import AddProperty from "./AddProperty";
import Listing_item from "./Listing_item";

function Listings({listing}){
    // const [listing, setListing] = useState([])

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

    
    return (
      <>
        <div className="card">
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
        </div>

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
        }
        <h2>Add New Property</h2>
        <AddProperty 
        newerlist={updatedListings}/> */}
      </>
    );
}

export default Listings;