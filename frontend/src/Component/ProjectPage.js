import React from 'react'

export const ProjectPage = ({project}) => {

    
    return (
        <div >
            {project? <div><li>{project.name}</li></div> 
            : null}
        <p></p> 
    </div>
    )
}
