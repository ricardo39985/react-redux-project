import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout} from '../actions/currentUser'

const Logout = ({logout}) => {
    return (
        <div>
            <input type="submit" onClick={logout}value="Logout"/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps,{logout})(Logout)
