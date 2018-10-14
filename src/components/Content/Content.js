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
            <div className="cardContainer">
                <Card className="card">
                    <CardContent>
                        <Typography className="cardTitle" variant="h5" >
                            How well are you understanding the content?
                        </Typography>
                        <div className="cardRadioGroup">
                            <RadioGroup
                                name="understanding"
                                value={this.state.understanding}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="1" control={<Radio color="primary" />} label="I am not understanding it" />
                                <FormControlLabel value="2" control={<Radio color="primary" />} label="I need more work" />
                                <FormControlLabel value="3" control={<Radio color="primary" />} label="It's coming along" />
                                <FormControlLabel value="4" control={<Radio color="primary" />} label="I get it" />
                                <FormControlLabel value="5" control={<Radio color="primary" />} label="I get it really well!" />
                            </RadioGroup>
                        </div>
                        <NavLink to="/3" onClick={this.handleClick}>
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

export default connect(mapStateToProps)(Content);