import React from 'react';
import { Button, FormControl } from 'react-bootstrap';
import './App.css';

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

    }

    render() {
        return(
            <form action="" method="GET">
                <label>
                    Enter game ID:<br />
                    <FormControl type="text" name="name" value={this.state.value} onChange={this.handleChange} placeholder="Game ID" />
                    </label><br />
                    <Button variant="primary" name="start" type="submit">Join Game</Button>
            </form>
        )
    }
}
export default JoinForm