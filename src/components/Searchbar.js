import React, { useState, useEffect } from 'react';

function Searchbar(){
    const [search, setSearch]=useState('')

    const handleInputChange = (event) => {
        setSearch(event.target.value);
      };

    return(
        <div className="search-bar">
            <input 
            type="text" 
            placeholder="Search.." 
            value={search}
            onChange={handleInputChange}
            ></input>
            <button>Search</button>
        </div>
    )
}
export default Searchbar;