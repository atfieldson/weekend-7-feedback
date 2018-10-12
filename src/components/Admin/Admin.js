import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Feeling extends Component {

    state = {
        feedback: [],
    }

    getFeedback = () => {
        axios.get('/feedback').then((response) => {
            this.setState({
                feedback: [...response.data]
            })
        })
    }

    componentDidMount() {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <h2>Admin Table below</h2>
                <p>{JSON.stringify(this.state.feedback)}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(Feeling);