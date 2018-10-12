import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink } from 'react-router-dom';
import axios from 'axios';
import Content from '../Content/Content'

class Feeling extends Component {
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input />
                <NavLink to="/2">Next</NavLink>
            </div>
        )
    }
}

export default Feeling;