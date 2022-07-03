import React from "react";
import { useState } from "react";
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import LogoMaximumYellowRed from '../app/assets/img/LogoMaximumYellowRed.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPaw, faBone } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar light expand='md'>

                <NavbarBrand href='/'>
                    <img src={LogoMaximumYellowRed} className='logo-lg' alt='Logo' /> Porto Animal Shelter
                </NavbarBrand>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />

                <Collapse isOpen={menuOpen} navbar >
                    <Nav navbar className='navlink'>
                        <NavItem>
                            <NavLink className='nav-link' to='/adoptions'>
                                <FontAwesomeIcon className="fa" icon={faHeart} /> Adoptions
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/lostfound'>
                                <FontAwesomeIcon className="fa" icon={faPaw} /> Lost & Found
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/resources'>
                                <FontAwesomeIcon className="fa" icon={faBone} /> Resources
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
};

export default Header;