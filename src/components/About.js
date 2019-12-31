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
          <p>Legal name: Connor Lagana</p>
          <p>Preferred name: Titanium Dragon</p>
          <p>Social Security Number: 834-71-2909</p>
          <p>FICO Score: 745</p>
          <p>Country: US of A</p>
          <p>State: Depressed</p>
          <p>Favorite amendment: Twenty-first</p>
          <p>Dunky order: Medium Iced Coffee w/ Almond Milk</p>
          <p>Amount of brown rice consumed daily: 1.3 lbs</p>
          <p>Relationship status: Single and ready to mingle</p>
          <p>Highest number counted to: 1,602</p>
        </div>
      </div>
    </div>
  )
}

export default About