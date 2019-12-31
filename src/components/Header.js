import React from 'react'
import NavBar from "./NavBar.js"
import codeBackground from '../images/codeBackground.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={codeBackground} />
        <div
          className="name">
          Connor Lagana
        </div>
        <div
          className="title">
          Software Engineer
        </div>
        <NavBar />

      </div>

    </header>
  )
}

export default Header