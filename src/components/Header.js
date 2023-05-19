import React from "react";
import Navbar from "./Navbar"
import './App.css'
function Header(){
    return(
        <>
        <div className="header">
            <header>
                <span className="logo">
                    Mo Realty
                </span>
                <Navbar />
            </header>
        </div>
        </>
    )
}

export default Header;