import React from "react";
import { FaRegCopyright, FaGithub, FaLinkedin } from "react-icons/fa"

import '../styles/footer.css'

const Footer = () => {
    return ( 
        <div className='footer'>
            <p>Website made by Kacper Kubić | Copyright <FaRegCopyright/> {new Date().getFullYear()} All rights reserverd</p>
            <div className='links'>
                <a href='https://www.linkedin.com/in/kacper-kubic/'><FaLinkedin/></a>
                <a href='https://github.com/kacperkubic'><FaGithub/></a>
            </div>
        </div>
     );
}
 
export default Footer;