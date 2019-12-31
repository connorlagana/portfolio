import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
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
          description: "Connor Sucks aSs"
        },
        {
          name: 'Angular',
          pic: angularLogo,
          description: "Angular is a thing i think"
        }

      ]
    }
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <About />
      </div>
    );
  }

}

export default App;
