import React from "react";
import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import '../styles/about.css'
import image from '../images/image.png';
import Resume from '../Resume.pdf';

const About = () => {
    const sentence = "projects".split("");

    const rubberBand = () => {
        return{
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, 0.55, 1)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.25, 0.85, 1)",
                "scale3d(0.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ]
        }
    }

    const mappedSentence = sentence.map((letter, index) => {
        return(
            <motion.span whileHover={() => rubberBand()} className = {`span${index}`} key={index}>
                <Link to='projects' spy={true} smooth={true} offset={-50} duration={500}>
                    {letter}
                </Link>
            </motion.span>
        )
    })


    return ( 
        <div className='about'>
            <div className='image'>
                <img src={image} alt='PhotoOfMyself'/>               
            </div>
            <div className='content'>
                <p className='title'>About me</p>
                <p className='aboutParagraph'>I am 20 years old certified IT technician and I am curentlly looking for my first job as a Junior Frontend Developer. For the past few months I was developing my skills while building my own <span>{mappedSentence}</span>. I am fast learner and I am hungry for knowledge in the field of Front-end and Back-end development.</p>
                <div className='aboutLinks'>
                    <a href={Resume} download><FaFileDownload className='icon'/><div className='tooltip'>Get my resume</div></a>
                    <a href='https://www.linkedin.com/in/kacper-kubic/'><FaLinkedin className='icon'/><div className='tooltip'>My LinkedIn</div></a>
                    <a href='https://github.com/kacperkubic'><FaGithub className='icon'/><div className='tooltip'>My GitHub</div></a>
                </div>
            </div>
        </div>
     );
}
 
export default About;