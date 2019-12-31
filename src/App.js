import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Technologies from './components/Technologies.js'
import Quotes from './components/Quotes.js'
import Footer from './components/Footer.js'

import jsLogo from './images/logos/javascriptLogo.png'
import htmlLogo from './images/logos/htmlLogo.png'
import cssLogo from './images/logos/cssLogo.png'
import reactLogo from './images/logos/reactLogo.png'
import reactNativeLogo from './images/logos/reactNativeLogo.png'
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
          name: 'HTML',
          pic: htmlLogo,
          description: "HTML stands for 'Connor  Socially inept'"
        },
        {
          name: 'CSS',
          pic: cssLogo,
          description: "CSS stands for 'Connor Sucks aSs'"
        },
        {
          name: 'React',
          pic: reactLogo,
          description: "React"
        },
        {
          name: 'React Native',
          pic: reactNativeLogo,
          description: "Because you can't call them Indians anymore"
        },
        {
          name: 'Angular',
          pic: angularLogo,
          description: "Angular is the full name of the main character from Avatar (blue arrow boy, not the blue guys that go to pandora)"
        },

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
        <Footer />
      </div>
    );
  }

}

export default App;
