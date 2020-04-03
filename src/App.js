import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './fire';
import RegisterForm from './register';
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    ReactDOM.render(
      <div className="App">
        <header className="App-header">
          <Welcome />
        </header>
    </div>        
    , document.getElementById("root")) 
  );
}

export default App;
