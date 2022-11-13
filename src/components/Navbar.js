import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

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
            <Link to='home' spy={true} smooth={true} offset={30} duration={500} className='link' onClick={closeMenu}>Home</Link>
            <Link to='about' spy={true} smooth={true} offset={10} duration={500} className='link' onClick={closeMenu}>About</Link>
            <Link to='projects' spy={true} smooth={true} offset={30} duration={500} className='link' onClick={closeMenu}>Projects</Link>
            <Link to='technologies' spy={true} smooth={true} offset={30} duration={500} className='link' onClick={closeMenu}>Technologies</Link>
        </div>
        <div className='navContact'>
            <Link to='contact' spy={true} smooth={true} offset={30} duration={500} className='link' onClick={closeMenu}>Contact me</Link>
        </div>
    </div>
    );
}
 
export default Navbar;