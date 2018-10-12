import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Thankyou extends Component {
    render() {
        return (
            <div>
                <h2>Thanks for leaving feedback!</h2>
            </div>
        )
    }
}

export default Thankyou;