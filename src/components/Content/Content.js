import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink } from 'react-router-dom';
import axios from 'axios';
import Support from '../Support/Support'

class Content extends Component {
    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <input />
                <NavLink to="/3">Next</NavLink>
            </div>
        )
    }
}

export default Content;