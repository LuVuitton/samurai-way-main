import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'
import ListGroup from 'react-bootstrap/ListGroup';


const NavBar = () => {

    const [activeButton, setActiveButton] = useState<null | number>(null);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
    };

    const mappedLinks = ['Profile', 'Users'].map((e, index) => {
        const isActive = activeButton === index;

        return (
            <NavLink to={`/${e}`} key={index}>
                <ListGroup.Item
                    className={s.item}
                    disabled={isActive}
                    onClick={() => handleButtonClick(index)}
                >
                    {e}
                </ListGroup.Item>
            </NavLink>
        );
    });
    return (
        <div className={s.mainWrapper}>
            <ListGroup>
                {mappedLinks}
            </ListGroup>
        </div>
    );
}

export default NavBar;
