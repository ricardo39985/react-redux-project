import React from 'react'

export const ProjectPage = ({project}) => {

    
    return (
        <div >
            {project? <li>{project.name}</li> : null}
        <p></p> 
    </div>
    )
}
