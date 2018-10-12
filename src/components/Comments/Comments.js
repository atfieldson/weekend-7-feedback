import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Comments extends Component {
    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <input />
                <NavLink to="/5">Submit Feedback</NavLink>
            </div>
        )
    }
}

export default Comments;