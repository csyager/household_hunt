import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './components/fire';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Join from './components/Join';
import Game from './components/Game';


function App() {
  return (
    ReactDOM.render(
      <div className="App">
        <header className="App-header">
        <BrowserRouter>
            <div>
              <Route exact path="/" component={Welcome} />
              <Route path="/join" component={Join} />
              <Route path="/game" component={Game} />
            </div>
          </BrowserRouter>
        </header>
      </div>        
    , document.getElementById("root")) 
  );
}

export default App;
