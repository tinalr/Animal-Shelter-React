import React from "react";
import { useState } from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import LogoMaximumYellowRed from '../app/assets/img/LogoMaximumYellowRed.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div>
            <Navbar sticky='top' light expand='md'>
                
                <NavbarBrand href='/'>
                    <img src={LogoMaximumYellowRed} className='logo-lg' alt='Logo' /> Porto Animal Shelter
                </NavbarBrand>
    
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
    
                <Collapse isOpen={menuOpen} navbar >
                    <Nav navbar className=''>
                        <NavItem>
                            <NavLink className='nav-link' to='/adoptions'>
                                <i className='fa-regular fa-house-heart' /> Adoptions
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/lostfound'>
                                <i className="fa-regular fa-paw" /> Lost & Found
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/resources'>
                                <i className='fa-regular fa-bone' /> Resources
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
};

export default Header;