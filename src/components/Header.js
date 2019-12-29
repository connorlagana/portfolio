import React from 'react'
import NavBar from "./NavBar.js"
import codeBackground from '../images/codeBackground.jpeg'

const Header = () => {
  return (
    <div>
      <img src={codeBackground} />
      <h1>Connor Lagana</h1>
      <h3>Software Engineer</h3>
      <NavBar />
    </div>
  )
}

export default Header