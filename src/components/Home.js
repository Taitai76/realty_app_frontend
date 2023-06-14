import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
function Home() {
  const[listings, setListing]=useState([])

  useEffect(() => {
    fetch("http://localhost:9292/listings")
      .then((r) => r.json())
      .then((items) => setListing(items));
  }, []);

  function updatedListing(t){
    setListing(t)
  }

  return (
    <>
      <Searchbar setUpdatedListing={updatedListing} />
      <div className="listing_list">
        {listings.map((item) => (
          <div className="card">
            <img src={item.picture}></img>
            <div className="details">
              <span className="price">
                ${item.asking_price.toLocaleString()}
                <br />
              </span>
              <span className="location">
                {item.address}
                <br />
              </span>
              <span className="location">
                Built in: {item.year_built}
                <br />
              </span>
              <span className="location">
                {item.sqft} Sq. ft
                <br />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
