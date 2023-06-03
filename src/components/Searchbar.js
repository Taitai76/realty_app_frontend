import React, { useState, useEffect } from 'react';

function Searchbar({setUpdatedListing}){
    const [search, setSearch]=useState('')
    const [fullList, setFullList] = useState([])


    useEffect(()=>{
        fetch(("http://localhost:9292/listings"))
        .then((r) => r.json())
        .then((items) => setFullList(items));
    }, []);

    const handleInputChange = (event) => {
        const term = event.target.value
        setSearch(term)

        if(term !== " "){
            const filtedList = fullList.filter(
            (item) =>
                item.year_built.toString().includes(term) ||
                item.sqft.toString().includes(term)
            );
            setUpdatedListing(filtedList)
        }
        else{
            setUpdatedListing(fullList)
        }
    };
    
    return(
        <div className="search-bar">
            <input 
            type="text" 
            placeholder="Search by Sqft or year built" 
            value={search}
            onChange={handleInputChange}
            ></input>
            <button>Search</button>
        </div>
    )
}
export default Searchbar;