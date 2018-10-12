import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink } from 'react-router-dom';

class Content extends Component {

    state = {
        understanding: '',
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
        console.log("understanding:", this.state.understanding);
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        console.log(this.props.feedback);
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <input onChange={this.handleChange} />
                <NavLink to="/3" onClick={this.handleClick}>Next</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Content);