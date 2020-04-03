import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import JoinForm from './join-form';

class Join extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title style={{ color: "black" }}>Join a game</Card.Title>
                    <Card.Text style={{ color: "black" }}>
                        <JoinForm />
                    </Card.Text>
                </Card.Body>
            </Card>            
        );
    }
}
export default Join