import React from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

import '../styles/about.css'
import image from '../images/sssss.png';

const About = () => {
    return ( 
        <div className='about'>
            <div className='image'>
                <img src={image} alt='PhotoOfMyself'/>               
            </div>
            <div className='content'>
                <p className='title'>About me</p>
                <p className='aboutParagraph'>I am 20 years old certified IT technician and I am curentlly looking for my first job as a Junior Frontend Developer. For the past few months I was developing my skills while creating my own projects. I am a fast learner.</p>
                <div className='aboutLinks'>
                    <a href='a'><FaFileDownload className='icon'/><div className='tooltip'>Get my resume</div></a>
                    <a href='https://www.linkedin.com/in/kacper-kubic/'><FaLinkedin className='icon'/><div className='tooltip'>My LinkedIn</div></a>
                    <a href='https://github.com/kacperkubic'><FaGithub className='icon'/><div className='tooltip'>My GitHub</div></a>
                </div>
            </div>
        </div>
     );
}
 
export default About;