import React from "react";

import { TechnologiesList } from "../data";
import '../styles/technologies.css';

const Technologies = () => {
    
    const technologiesList = TechnologiesList.map((technology) => {
        return (
            <div className='technology'>
                <img src={technology.image} alt={technology.name}/>
                <h4>{technology.name}</h4>
            </div>
        )
    })

    return ( 
        <div className='technologies'>
            <div className='text'>
                <h2>Skills & Technologies</h2>
                <p>All the technologies that I previoulsy used for my projects</p>
            </div>
            <div className='technologiesList'>
                {technologiesList}
            </div>
        </div>
     );
}
 
export default Technologies;