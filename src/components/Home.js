import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Agents from "./Agents";
function Home() {

  // function updatedListing(t) {
  //   setListing(t);
  // }

  return (
    <>
      {/* <Searchbar setUpdatedListing={updatedListing} /> */}
      {/* <div className="listing_list">
        {listing.map((item) => (
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
              <span className="location">
                Contact: {agentName(item.agent_id)}
                <br />
              </span>
            </div>
          </div>
        ))}
      </div> */}
      <h2>Meet our Agents</h2>
    </>
  );
}

export default Home;
