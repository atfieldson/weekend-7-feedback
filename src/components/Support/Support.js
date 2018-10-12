import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Comments from '../Comments/Comments'

class Support extends Component {
    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <input />
                <NavLink to="/4">Next</NavLink>
            </div>
        )
    }
}

export default Support;