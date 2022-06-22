import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import LogoMaximumYellowRed from '../app/assets/img/LogoMaximumYellowRed.png';

const Header = () => {
    return (
        <Navbar>
            <NavbarBrand href='/'>
                <img src={LogoMaximumYellowRed} className='logo-lg' alt='Logo' />
            </NavbarBrand>
        </Navbar>
    );
};

export default Header;