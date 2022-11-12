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
                <h2>{project.name}</h2>
                <button><a href={project.liveLink}>{buttonText}</a></button>
                <button><a href={project.repoLink}>Source Code</a></button>
            </div>  
        </div>
     );
}
 
export default SingleProject;