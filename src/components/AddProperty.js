import React, { useState, useEffect } from 'react';

function AddProperty({newerlist}){
  const [property, setProperty] = useState({
    picture: '',
    address: '',
    asking_price: '',
    sqft: '',
    agent_id: '',
    year_built: ''
  });

  function handleInputChange(e){
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  function handleSubmit(e){
    e.preventDefault();
    const propertyData = {
      picture: property.picture,
      address: property.address,
      asking_price: property.asking_price,
      sqft: property.sqft,
      agent_id: property.agent_id,
      year_built: property.year_built
    };
    fetch("http://localhost:9292/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(propertyData),
    })
      .then((r) => r.json())
      .then((r) => newerlist(r));

      setProperty({
        picture: '',
        address: '',
        asking_price: '',
        sqft: '',
        agent_id: '',
        year_built: ''
      });
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Picture:
          <input
            type="text"
            name="picture"
            value={property.picture}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={property.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Asking Price:
          <input
            type="text"
            name="asking_price"
            value={property.asking_price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Square Footage:
          <input
            type="text"
            name="sqft"
            value={property.sqft}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Agent ID:
          <input
            type="text"
            name="agent_id"
            value={property.agent_id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Year Built:
          <input
            type="text"
            name="year_built"
            value={property.year_built}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
