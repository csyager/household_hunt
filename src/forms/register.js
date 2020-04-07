import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import '../App.css';
import fire from '../components/fire';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleStart(event) {
        event.preventDefault();
        console.log("Adding user " + this.state.value + " to users collection.");
        var user_ref = fire.database().ref('users').push();
        user_ref.set({
            username: this.state.value
        });
        var game_ref = fire.database().ref('games').push();
        return game_ref.set({
            owner: user_ref.key
        }).then(() => {
            window.location = '/game?username=' + this.state.value + '&id=' + game_ref.key
        });

    }

    handleJoin(event) {
        event.preventDefault();
        window.location = '/join?username=' + this.state.value;
    }

    render() {
        return(
            <form method="GET">
                <label>
                    Enter your name to play:<br />
                    <FormControl type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Name" />
                </label><br />
                <Button type="button" variant="primary" onClick={this.handleStart.bind(this)}>Start a Game</Button>&nbsp;&nbsp;
                <Button type="button" variant="secondary" onClick={this.handleJoin.bind(this)}>Join a Game</Button>
            </form>
        );
    }
}
export default RegisterForm;