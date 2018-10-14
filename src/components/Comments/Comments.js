import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
            <div className="cardContainer">
                <Card className="card">
                    <CardContent>
                        <Typography className="cardTitle" variant="h5" >
                            Any comments you want to leave?
                        </Typography>
                        <TextField
                            id="comments"
                            label="Comments"
                            multiline
                            rowsMax="5"
                            value={this.state.comments}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <NavLink to="/5" onClick={this.handleClick}>
                            <Button variant="contained" color="primary">
                                Next
                            </Button>
                        </NavLink>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(Comments);