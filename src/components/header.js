import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <div className="header-menu">
            <Link to="/" className="header-navlink large">
              Home
            </Link>
          </div>
          <Link to="/instagramand-team" className="header-navlink1 large">
            {props.text}
          </Link>
          <Link to="/contact" className="header-navlink2 large">
            {props.text1}
          </Link>
          <div className="header-container1">
            <div className="header-container2"></div>
            <div data-type="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <button className="header-button button">{props.button}</button>
          </div>
        </div>
      </nav>
      <div data-type="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink3 large">
            Soft UI Design System
          </Link>
          <div data-type="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink4 large">
              Home
            </Link>
            <Link to="/instagramand-team" className="header-navlink5 large">
              Profile
            </Link>
            <Link to="/contact" className="header-navlink6 large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  button: 'Download',
  text1: 'Contact',
  text: 'Instagram and Team',
}

Header.propTypes = {
  button: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Header
