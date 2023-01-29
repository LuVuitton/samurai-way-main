import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul>
                <li> <NavLink to='/Messenger'> DialogItem </NavLink> </li>
                <li> <NavLink to='/Profile'> Profile </NavLink> </li>
            </ul>
        </div>
    );
}

export default NavBar;
