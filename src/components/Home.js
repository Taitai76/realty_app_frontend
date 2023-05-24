import React, { useEffect, useState } from "react";

function Home(){
    const [listing, setListing] = useState([])

    useEffect(()=>{
        fetch(("http://localhost:9292/listings"))
        .then((r) => r.json())
        .then((items) => setListing(items));
    }, []);
    return(
        <>
        <div className="search-bar">
            <input type="text" placeholder="Search.." ></input>
            <button>Search</button>
        </div>

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
        </>
    )
}

export default Home;