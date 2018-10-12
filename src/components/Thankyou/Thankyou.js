import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


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
            <div>
                <h2>Thanks for leaving feedback!</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ state })

export default connect(mapStateToProps)(Thankyou);