import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Technologies from './components/Technologies.js'
import Quotes from './components/Quotes.js'
import Portfolio from './components/Portfolio.js'
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

import senditLogo from './images/projects/senditLogo.png'
import instatagSS from './images/projects/instatagSS.png'
import stockifySS from './images/projects/stockifySS.png'

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
          description: "HTML stands for 'How do i geT My Life together?'"
        },
        {
          name: 'CSS',
          pic: cssLogo,
          description: "CSS stands for 'Caroline please come back i miSS you'"
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
          name: 'GitHub',
          pic: githubLogo,
          description: "peep my shit fam"
        },
        {
          name: 'JSON',
          pic: jsonLogo,
          description: "JSON stands for 'Just Snorted an absurd amount Of Nicotine'"
        },
      ],
      projects: [
        {
          name: 'sendit',
          description: "Are you silly? I'm still gonna send it...",
          pic: senditLogo,
          githubLink: 'https://github.com/connorlagana/project2',
          deployedLink: 'https://sendit69420.surge.sh'
        },
        {
          name: 'instatag',
          description: "Please sir, can i have some more (dopamine)?",
          pic: instatagSS,
          githubLink: 'https://github.com/connorlagana/instatag',
          deployedLink: 'https://en.wikipedia.org/wiki/elon_musk'
        },
        {
          name: 'Stockify',
          description: "Spotify but for rich dudes!",
          pic: stockifySS,
          githubLink: 'https://github.com/connorlagana/project_1',
          deployedLink: 'https://stockify.surge.sh'
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
        <Portfolio
          projects={this.state.projects}
        />
        <Footer />
      </div>
    );
  }

}

export default App;
