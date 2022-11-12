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
                <h1>About me</h1>
                <p>I am 20 years old certified IT technician and I am curentlly looking for my first job as a Junior Frontend Developer. For the past few months I was developing my skills while creating my own projects. I am a fast learner.</p>
                <div className='aboutLinks'>
                    <button><a href='a'><FaFileDownload className='icon'/><p>Get my resume</p></a></button>
                    <button><a href='https://www.linkedin.com/in/kacper-kubic/'><FaLinkedin className='icon'/><p>My LinkedIn</p></a></button>
                    <button><a href='https://github.com/kacperkubic'><FaGithub className='icon'/><p>My GitHub</p></a></button>
                </div>
            </div>
        </div>
     );
}
 
export default About;