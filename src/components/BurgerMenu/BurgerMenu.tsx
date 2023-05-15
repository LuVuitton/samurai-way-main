import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {NavLink} from "react-router-dom";

export const BurgerMenu = (props: BurgerMenuPropsType) => {


    const mappedLinks = ['Profile', 'Users'].map((e, i) => {
        return (
            <Dropdown.Item key={i} as={NavLink} to={`/${e}`}>
                {e}
            </Dropdown.Item>
        );
    });


    return (
        <DropdownButton
            align="end"
            title="MENU"
            id="dropdown-menu-align-end"
            variant="light"
        >
            {mappedLinks}
            <Dropdown.Divider/>
            <Dropdown.Item onClick={props.signOutHandler}>Sign Out</Dropdown.Item>
        </DropdownButton>
    );
}

type BurgerMenuPropsType = {
    signOutHandler: () => void
}