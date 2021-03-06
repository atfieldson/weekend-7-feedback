import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//material-ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Thankyou extends Component {

    postFeedback = () => {
        console.log(this.props.state.feedback);
        axios({
            method: "POST",
            url: '/feedback',
            data: this.props.state.feedback,
        }).then((response) => {
            console.log("post succesful:", response);
        }).catch((error) => {
            console.log('error:', error);
        })
    }

    componentDidMount() {
        this.postFeedback();
    }

    render() {
        return (
            <div className="cardContainer">
                <Card className="card">
                    <CardContent>
                        <Typography className="cardTitle" variant="h5" >
                            Thanks for leaving feedback!
                        </Typography>

                        <img alt='Thanks' className="checkMark" src={require('./checkmark-png-28.png')} />
                        <NavLink to="/" onClick={this.handleClick}>
                            <Button variant="contained" color="primary">
                                Leave New Feedback
                            </Button>
                        </NavLink>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(Thankyou);