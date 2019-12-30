import React from 'react'
import NavBar from "./NavBar.js"
import codeBackground from '../images/codeBackground.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src="https://cdn.vox-cdn.com/thumbor/blLePWQYx-8yHC22Pu6utSw0T6g=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/63285273/elon_musk_tesla_3036.0.jpg" />
        <div className="centered">Connor Lagana</div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header