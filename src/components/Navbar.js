import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import '../styles/navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const closeMenu = () => setToggle(false);
    
    return ( 
    <div className='navbar'>
        <div className='navLogo'>
            <h2>Kacper Kubić</h2>
        </div>
        <div className='navToggle' onClick={handleClick}>
            {toggle ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : (<FaBars size={30} style={{color: '#ffffff'}}/>)}
        </div>
        <div className={toggle ? 'navLinks active' : 'navLinks'}>
            <a className='link' href='/' onClick={closeMenu}>Home</a>
            <a className='link' href='/about' onClick={closeMenu}>About</a>
            <a className='link' href='/projects' onClick={closeMenu}>Projects</a>
            <a className='link' href='/skills' onClick={closeMenu}>Skills</a>
        </div>
        <div className='navContact'>
            <a className='link' href='/contact'>Contact me</a>
        </div>
    </div>
    );
}
 
export default Navbar;