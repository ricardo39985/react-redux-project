import React from 'react'
import LoginForm from './LoginForm'
import ProjectsContainer  from './ProjectsContainer'
import { connect } from 'react-redux'

function MainContainer({projects}) {
    return (
        <div>
            {/* <LoginForm/> */}
            <ProjectsContainer projects={projects}/>
            </div>
    )
}
const mapStateToProps=({projects})=>{
    return {
        projects
    }
}
export default connect(mapStateToProps)(MainContainer)