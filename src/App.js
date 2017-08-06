import React, { Component } from 'react';
import './App.css';

import User from './components/User/User';
import TrickList from './components/TrickList/TrickList';
import { Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Junie',
      points: 0,
      tricks: [
       {
          title: 'Ollie',
          videoCode: 'nCrhf-pyX_g',
          description: 'The ollie is a fundamental trick in skateboarding and is used to leap onto, over, or off obstacles, or over gaps of unfriendly terrain such as grass or stairs. As so many other tricks depend on it - for example the kickflip and heelflip - the ollie is often the first trick to be learned by a new skateboarder.',
          points: 1,
          landed: false
        },
        {
          title: 'Frontside 180',
          videoCode: 'OqYb98vp0zI',
          description: 'Ollie while turning the board and body frontwards 180 degrees.',
          points: 1,
          landed: false
        },
        {
          title: 'Backside 180',
          videoCode: '5RtkYzx3TdE',
          description: 'Ollie while turning the board and body backwards 180 degrees.',
          points: 1,
          landed: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <User name={this.state.name} points={this.state.points} />
          <TrickList tricks={this.state.tricks} />
        </Container>
      </div>
    );
  }
}

export default App;
