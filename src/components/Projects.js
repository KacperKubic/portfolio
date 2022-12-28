import React from "react";

import SingleProject from "./SingleProject";
import { TerraShop, MovieApp, Blogs, ChatApp } from "../data";
import '../styles/projects.css';


const Projects = () => {
    return ( 
        <div className='projects'>
            <h1>My projects</h1>
            <div className='projectsList'>
                <SingleProject buttonText='Liveview' project={TerraShop}/>
                <SingleProject buttonText='Liveview' project={MovieApp}/>
                <SingleProject buttonText='Screenshots' project={Blogs}/>
                <SingleProject buttonText='Screenshots' project={ChatApp}/>
            </div>
        </div>
     );
}
 
export default Projects;