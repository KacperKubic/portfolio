import React from "react";

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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dignissimos veniam cupiditate ut libero distinctio neque, saepe tenetur debitis optio maiores dolorum, voluptatem repudiandae consequuntur excepturi ipsam est fugit eligendi!</p>
                <button>Get my resume</button>
            </div>
        </div>
     );
}
 
export default About;