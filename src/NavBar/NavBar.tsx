import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li> <NavLink to='/DialogItem'> DialogItem </NavLink> </li>
                <li> <NavLink to='/Profile'> Profile </NavLink> </li>
            </ul>
        </div>
    );
}

export default NavBar;
