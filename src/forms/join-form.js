import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import '../App.css';
import fire from '../components/fire';

class JoinForm extends React.Component {
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
        event.preventDefault();
        var location = window.location.href;
        location = location.split("?")[1];
        var username = location.split("=")[1];

        console.log("Redirecting to /game?username=" + username + "&id=" + this.state.value);

        window.location = "/game?username=" + username + "&id=" + this.state.value;
    }

    render() {
        return(
            <form action="" method="GET">
                <label>
                    Enter game ID:<br />
                    <FormControl type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Game ID" />
                    </label><br />
                    <Button variant="primary" name="start" type="button" onClick={this.handleSubmit.bind(this)}>Join Game</Button>
            </form>
        )
    }
}
export default JoinForm;