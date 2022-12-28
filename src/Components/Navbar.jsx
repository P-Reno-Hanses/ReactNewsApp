import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <section className="navbar__wrapper">
        <div className="navbar__items">
            <div className="navbar__logo">
                <img className='logo' src="https://cdn.discordapp.com/attachments/700428835791044618/1057772033578127360/Seaside.png" alt="" />
            </div>
            <div className="nav__bar--links">
                <div className="nav__bar--link">
                    <p>Subscribe</p>
                </div>
                <div className="nav__bar--link">
                <p>Our Policy</p>
                </div>
                <div className="nav__bar--link">
                <p>Contact</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar