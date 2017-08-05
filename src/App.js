import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import User from './components/User/User';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <User />
        </Container>
      </div>
    );
  }
}

export default App;
