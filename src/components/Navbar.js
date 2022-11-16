import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

import '../styles/navbar.css';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    const closeMenu = () => setToggle(false);
    
    return ( 
    <div className='navbarDiv'>
        <nav className='navbar'>
            <h2 className='navLogo'>Kacper Kubić</h2>
            <div className='navToggle' onClick={handleClick}>
                {toggle ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : (<FaBars size={30} style={{color: '#ffffff'}}/>)}
            </div>
            <ul className={toggle ? 'navLinks active' : 'navLinks'}>
                <li className='navLink'>
                    <Link to='home' spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu} className='link'>Home</Link>
                </li>
                <li className='navLink'>
                    <Link to='about' spy={true} smooth={true} offset={10} duration={500} onClick={closeMenu} className='link'>About</Link>           
                </li>
                <li className='navLink'>
                    <Link to='projects' spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu} className='link'>Projects</Link>          
                </li>
                <li className='navLink'>
                    <Link to='technologies' spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu} className='link'>Technologies</Link>       
                </li>
                <li className='navLink'>
                    <Link to='contact' spy={true} smooth={true} offset={30} duration={500} onClick={closeMenu} className='link'>Contact me</Link>     
                </li>
            </ul>
        </nav>
    </div>
    );
}
 
export default Navbar;