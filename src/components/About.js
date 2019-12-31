import React from 'react'
import sexyAssConnor from '../images/sexyAssConnor.jpg'
import wheretheladies from '../images/wheretheladies.PNG'

const About = () => {
  return (
    <div>
      <h1 className="sectionTitle">About</h1>
      <div id='profile'>
        <img src={wheretheladies} id='sexyAssConnor' />
        <div id="blueFrame">
          <h1>Quick Facts:</h1>
          <p>Legal Name: Connor Lagana</p>
          <p>Preferred Name: Titanium Dragon</p>
          <p>Preferred Name: Titanium Dragon</p>
        </div>
      </div>
    </div>
  )
}

export default About