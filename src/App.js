import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Technologies from './components/Technologies.js'

import jsLogo from './images/logos/javascriptLogo.png'

import angularLogo from './images/logos/angularLogo.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      technologies: [
        {
          name: 'JavaScript',
          pic: jsLogo,
          description: "Bro if you don't know what JavaScript is then you should quit your tech job"
        },
        {
          name: 'CSS',
          pic: angularLogo,
          description: "CSS stands for 'Connor iS Socially inept'"
        },
        {
          name: 'Angular',
          pic: angularLogo,
          description: "Angular is the full name of the main character from Avatar (blue arrow boy, not the blue guys that go to pandora)"
        }

      ]
    }
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <About />
        <Technologies />
      </div>
    );
  }

}

export default App;
