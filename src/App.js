import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Technologies from './components/Technologies.js'
import Quotes from './components/Quotes.js'
// import Footer from './components/Footer.js'

import jsLogo from './images/logos/javascriptLogo.png'
import cssLogo from './images/logos/cssLogo.png'
import angularLogo from './images/logos/angularLogo.png'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tech: [
        {
          name: 'JavaScript',
          pic: jsLogo,
          description: "Bro if you don't know what JavaScript is then you should quit your tech job"
        },
        {
          name: 'CSS',
          pic: cssLogo,
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
        <Quotes />
        <Technologies
          tech={this.state.tech}
        />
        {/* <Footer /> */}
      </div>
    );
  }

}

export default App;
