import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

class Support extends Component {

    state = {
        support: '',
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
        console.log("understanding:", this.state.support);
    }

    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
        console.log(this.props.feedback);
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <input onChange={this.handleChange}/>
                <NavLink to="/4" onClick={this.handleClick}>Next</NavLink>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Support);