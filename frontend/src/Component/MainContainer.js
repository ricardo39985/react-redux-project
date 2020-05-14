import React from 'react'
import LoginForm from './LoginForm'
import ProjectsContainer  from './ProjectsContainer'

export default function MainContainer() {
    return (
        <div>
            {/* <LoginForm/> */}
            <ProjectsContainer/>
            <h2>Side Bar</h2>
            <ul>
                <li>
                    Add Project
                </li>
                <li>
                    about
                </li>
            </ul>
            <h2>List of all projects</h2>
            <li>clickable</li>
        </div>
    )
}
