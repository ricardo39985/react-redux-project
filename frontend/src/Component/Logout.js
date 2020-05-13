import React, { Component } from 'react'
import { connect } from 'react-redux'

const Logout = () => {
    return (
        <div>
            <input type="submit" value="Logout"/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(Logout)
