import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../App/App.css'
//material ui
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';


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
            <div className="cardContainer">
                <Card className="card">
                    <CardContent>
                        <Typography className="cardTitle" variant="h5" >
                            How are you feeling today?
                        </Typography>
                            <div className = "cardRadioGroup">
                            <RadioGroup
                                name="feeling"
                                value={this.state.feeling}
                                onChange={this.handleChange}
                            >
                                <FormControlLabel value="1" control={<Radio color="primary"/>} label="Not great" />
                                <FormControlLabel value="2" control={<Radio color="primary"/>} label="Could be better" />
                                <FormControlLabel value="3" control={<Radio color="primary"/>} label="Decent" />
                                <FormControlLabel value="4" control={<Radio color="primary"/>} label="Good" />
                                <FormControlLabel value="5" control={<Radio color="primary"/>} label="Fantastic!" />
                            </RadioGroup>
                            </div>
                            <NavLink to="/2" onClick={this.handleClick}>
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

const mapStateToProps = (state) => ({
    state
});

// export const StyleExport = withStyles(styles)(Feeling);
export default connect(mapStateToProps)(Feeling);


