import React from 'react'

export default  ({project}) => {
    return (
        <div id={project.id}>
            
            <p>{project.name}</p>
        </div>
    )
}

