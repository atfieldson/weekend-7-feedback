import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
        console.log("understanding:", this.state.comments);
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
    }

    render() {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <input onChange={this.handleChange}/>
                <NavLink to="/5" onClick={this.handleClick}>Submit Feedback</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Comments);