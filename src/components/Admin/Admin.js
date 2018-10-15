import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";
//material ui
import Button from "@material-ui/core/Button";

class Feeling extends Component {

    state = {
        feedback: [],
        open: false,
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
                            Header: "Comments",
                            accessor: "comments"
                        },
                        {
                            expander: true,
                            Header: "Exp.",
                            width: 50,
                        },
                        {
                            Header: "Delete Feedback",
                            Cell: (row) => (<div>
                                <Button onClick={() => this.handleClick(row.original)} >
                                    Delete
                                </Button>
                            </div>)
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