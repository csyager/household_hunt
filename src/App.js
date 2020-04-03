import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './fire';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Join from './Join';


function App() {
  return (
    ReactDOM.render(
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
            <div>
              <Route exact path="/" component={Welcome} />
              <Route path="/join" component={Join} />
            </div>
          </BrowserRouter>
        </header>
      </div>        
    , document.getElementById("root")) 
  );
}

export default App;
