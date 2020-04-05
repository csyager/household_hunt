import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import RegisterForm from '../forms/register';

class Welcome extends Component {
    render() {
      return (
        <Card>
          <Card.Body>
            <Card.Title style={{ color: "black" }}>Welcome to Household Hunt</Card.Title>
            <Card.Text style={{ color: "black" }}>
              <RegisterForm />
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }
  }

  export default Welcome;