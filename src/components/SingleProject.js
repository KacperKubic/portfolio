import React from "react";

const SingleProject = ({ buttonText, project} ) => {
    return ( 
        <div className='project'>
            <div className='projectImage'>
                <img src={project.image} alt={project.name}/>
                <div className='imageOverlay'>
                    <h3>{project.name}</h3>
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