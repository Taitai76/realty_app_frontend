import React, { useEffect, useState } from "react";

function Listings(){
    const [listing, setListing] = useState([])

    useEffect(()=>{
        fetch(("http://localhost:9292/listings"))
        .then((r) => r.json())
        .then((items) => setListing(items));
    }, []);

    return(
        <>
        <button> add new listing</button>
        <div className="listing_list">
            {
                listing.map((item)=>(
                    <span>
                        {item.address}<br/> 
                    </span>
                ))
            }
        </div>
        </>
    )
}

export default Listings;