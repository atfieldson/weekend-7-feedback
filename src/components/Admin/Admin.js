import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button"


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

    handleClick = (row) => {
        axios.delete('/feedback', {
            data: row
        }).then( 
        this.getFeedback())
        console.log(row);
    }

    componentDidMount() {
        this.getFeedback();
    }

    render() {
        return (
            <div>
                <h2>Student Feedback</h2>
                <ReactTable
                        data={this.state.feedback}
                        columns={[
                            {
                                Header: "Feeling",
                                accessor: "feeling"
                            },
                            {
                                Header: "Understanding",
                                accessor: "understanding"
                            },

                            {
                                Header: "Support",
                                accessor: "support"
                            },
                            {
                                expander: true,
                                Header: "Comments",
                                width: 100,                                
                            },
                            {
                                Header: "Delete Feedback",
                                Cell: (row)  => (<Button onClick={() => this.handleClick(row.original)} >Delete</Button>)
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                        SubComponent={(row) => <div>{row.original.comments}</div>}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(Feeling);