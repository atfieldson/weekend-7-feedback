import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink } from 'react-router-dom';

class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        })
        console.log("feeling:", this.state.feeling);
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
        console.log(this.props.feedback);
        
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <input onChange={this.handleChange}/>
                <NavLink to="/2" onClick={this.handleClick}>Next</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Feeling);