import React from "react";

const SingleProject = ({ buttonText, project} ) => {
    return ( 
        <div className='project'>
            <div className='projectImage'>
            <picture>
                <source media="(max-width: 630px)" srcSet={project.imageMobile} />
                <source media="(min-width: 631px)" srcSet={project.image} />
                <img src={project.image} alt={project.name} />
            </picture>
                <div className='imageOverlay'>
                    <p>{project.description}</p>
                </div> 
            </div>
            <div className='projectInfo'>
                <p>{project.name}</p>
                <a href={project.liveLink} className='projectLink'>{buttonText}</a>
                <a href={project.repoLink} className='projectLink'>Source Code</a>
            </div>  
        </div>
     );
}
 
export default SingleProject;