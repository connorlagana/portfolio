import React from 'react'
import sexyAssConnor from '../images/sexyAssConnor.jpg'

const About = () => {
  return (
    <div>
      <h1 className="sectionTitle">About</h1>
      <div id='profile'>
        <img src={sexyAssConnor} id='sexyAssConnor' />
        <div id="blueFrame">I am a full stack developer with a passion for beautiful
        and powerful products. My editorial background gives me an astute eye for details
        and I view everything through an empathic lens. Most importantly, I’m always
        learning. Interested in working together? Shoot me an email.</div>
      </div>
    </div>
  )
}

export default About