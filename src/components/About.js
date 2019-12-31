import React from 'react'
import sexyAssConnor from '../images/sexyAssConnor.jpg'
import wheretheladies from '../images/wheretheladies.PNG'

const About = () => {
  return (
    <div>
      <h1 className="sectionTitle">About</h1>
      <div id='profile'>
        <img src={wheretheladies} id='sexyAssConnor' />
        <div id="blueFrame">What up!!! We're three cool guys looking for other cool
        guys who wanna hang out in our party mansion. Nothing sexual. Dudes in good
        shape encouraged, if you're fat you should be able to find humor in the
        little things. Again, <u>NOTHING SEXUAL.</u></div>
      </div>
    </div>
  )
}

export default About