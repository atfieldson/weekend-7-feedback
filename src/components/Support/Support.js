import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
//material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


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
            <div className="cardContainer">
                <Card className="card">
                    <CardContent>
                        <Typography className="cardTitle" variant="h5" >
                            How well are you being supported?
                    </Typography>
                        <div className="cardRadioGroup">
                            <RadioGroup
                                name="support"
                                value={this.state.support}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="1" control={<Radio color="primary" />} label="I don't feel supported" />
                                <FormControlLabel value="2" control={<Radio color="primary" />} label="I could use more support" />
                                <FormControlLabel value="3" control={<Radio color="primary" />} label="I have support" />
                                <FormControlLabel value="4" control={<Radio color="primary" />} label="I feel supported" />
                                <FormControlLabel value="5" control={<Radio color="primary" />} label="I feel really supported!" />
                            </RadioGroup>
                        </div>
                        <NavLink to="/4" onClick={this.handleClick}>
                        <Button variant = "contained" color="primary">
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

export default connect(mapStateToProps)(Support);