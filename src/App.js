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
import swiftLogo from './images/logos/swiftLogo.png'
import reactLogo from './images/logos/reactLogo.png'
import reactNativeLogo from './images/logos/reactNativeLogo.png'
import angularLogo from './images/logos/angularLogo.png'
import nodeLogo from './images/logos/nodeLogo.jpg'
import pythonLogo from './images/logos/pythonLogo.png'
import rubyLogo from './images/logos/rubyLogo.png'
import railsLogo from './images/logos/railsLogo.png'
import gitLogo from './images/logos/gitLogo.png'
import githubLogo from './images/logos/githubLogo.png'
import jsonLogo from './images/logos/jsonLogo.png'

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
          description: "HTML stands for 'HGTV Type Minerals Left'"
        },
        {
          name: 'CSS',
          pic: cssLogo,
          description: "CSS stands for 'Connor Sucks aSs'"
        },
        {
          name: 'Swift',
          pic: swiftLogo,
          description: "I shall swiftly steal your girlfriend'"
        },
        {
          name: 'React.js',
          pic: reactLogo,
          description: "How will you react with deez nuts on your face"
        },
        {
          name: 'React Native',
          pic: reactNativeLogo,
          description: "Because you can't call them Indians anymore"
        },
        {
          name: 'AngularJS',
          pic: angularLogo,
          description: "Angular is the full name of the main character from Avatar (blue arrow boy, not the blue guys that go to pandora)"
        },
        {
          name: 'Node.js',
          pic: nodeLogo,
          description: "I actually haven't learned this yet lololol"
        },
        {
          name: 'Python',
          pic: pythonLogo,
          description: "def getMeAJob(plz):"
        },
        {
          name: 'Ruby',
          pic: rubyLogo,
          description: "Ruby SOHO"
        },
        {
          name: 'Ruby on Rails',
          pic: railsLogo,
          description: "Kinda like Connor on Coke but not exactly"
        },
        {
          name: 'Git',
          pic: gitLogo,
          description: "I really need to GIT a life"
        },
        {
          name: 'Github',
          pic: githubLogo,
          description: "I really need to GIT a girlfriend instead of pornHUB"
        },
        {
          name: 'JSON',
          pic: jsonLogo,
          description: "JSON stands for 'Just Snorted an absurd amount Of Nicotine'"
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
