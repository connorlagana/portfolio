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
          CONNOR "SPANKY" LAGANA
        </div>
        <div
          className="title">
          Habitual Line Stepper
        </div>
        <NavBar />

      </div>

    </header>
  )
}

export default Header