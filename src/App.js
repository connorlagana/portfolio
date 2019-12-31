import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

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
