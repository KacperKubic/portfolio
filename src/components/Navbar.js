import React from "react";

import '../styles/navbar.css';

const Navbar = () => {
    return ( 
    <div className='navbar'>
        <div className='logo'>
            <h2>Kacper Kubić</h2>
        </div>
        <div className='links'>
            <a className='link' href='/'>Home</a>
            <a className='link' href='/about'>About</a>
            <a className='link' href='/projects'>Projects</a>
            <a className='link' href='/skills'>Skills</a>
        </div>
        <div className='contact'>
            <a className='link' href='/contact'>Contact me</a>
        </div>
    </div>
    );
}
 
export default Navbar;