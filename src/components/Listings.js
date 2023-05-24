import React, { useEffect, useState } from "react";
import AddProperty from "./AddProperty";

function Listings(){
    const [listing, setListing] = useState([])

    useEffect(()=>{
        fetch(("http://localhost:9292/listings"))
        .then((r) => r.json())
        .then((items) => setListing(items));
    }, []);

    function updatedListings(added){
        setListing([...listing, added])
    }

    return(
        <>
        <div className="listing_list">
            {
                listing.map((item)=>(
                    <div className="card">
                        <img src={item.picture}></img>
                        <div className="details">
                            <span className="price">${item.asking_price.toLocaleString()}<br/></span>
                            <span className="location">{item.address}</span>
                        </div>
                    </div>
                ))
            }
        </div>
        <h2>Add New Property</h2>
        <AddProperty 
        newerlist={updatedListings}/>
        </>
    )
}

export default Listings;