import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <NavLink
            exact
            to="/">
                Home
            </NavLink>
            <NavLink
            to="/income"
            >
                Income
            </NavLink>
            
        </nav>
    )
}

export default Navbar;