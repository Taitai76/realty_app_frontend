import React from "react";
import Navbar from "./Navbar"
import './App.css'
function Header(){
    return(
        <header>
            <img className="logo" src='moh_logo.png'></img>
            <Navbar />
        </header>   

    )
}

export default Header;