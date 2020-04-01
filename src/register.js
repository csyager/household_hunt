import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import Welcome from './Welcome'
import './App.css';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("Name: " + this.state.value);
    }

    render() {
        return(
            <form action="" method="GET">
                <label>
                    Enter your name to play:<br />
                    <FormControl type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
                </label><br />
                <Button variant="primary" name="start" type="submit">Start a Game</Button>&nbsp;&nbsp;
                <Button variant="secondary" name="join" type="submit">Join a Game</Button>
            </form>
        );
    }
}
export default RegisterForm