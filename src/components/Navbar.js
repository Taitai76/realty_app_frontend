import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navi">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/agents">
                Agents
            </NavLink>
            
        </nav>
    )
}

export default Navbar;