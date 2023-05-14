import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.mainWrapper}>
            <ul>
                <li> <NavLink to='/Messenger'> DialogItem </NavLink> </li>
                <li> <NavLink to='/Profile'> Profile </NavLink> </li>
                <li> <NavLink to='/Users'> Users </NavLink> </li>
            </ul>
        </div>
    );
}

export default NavBar;
