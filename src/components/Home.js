import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Agents from "./Agents";
function Home(){
    const [listing, setListing] = useState([])

    useEffect(()=>{
        fetch(("http://localhost:9292/listings"))
        .then((r) => r.json())
        .then((items) => setListing(items));
    }, []);

    return(
        <>
        <Searchbar />
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
        <h2>Meet our Agents</h2>
        <Agents />
        </>
    )
}

export default Home;