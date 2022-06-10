import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-container">
        <div className="footer-container1">
          <span className="footer-text">Idle</span>
          <span className="">Copyright © 2021 Soft by Creative Tim.</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text02 large">Company</span>
            <span className="footer-text03 large">About Us</span>
            <span className="footer-text04 large">Careers</span>
            <span className="footer-text05 large">Press</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text06 large">Pages</span>
            <span className="footer-text07 large">Login</span>
            <span className="footer-text08 large">Register</span>
            <span className="footer-text09 large">Help</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text10 large">Products</span>
            <span className="footer-text11 large">Free</span>
            <span className="footer-text12 large">PRO</span>
            <span className="footer-text13 large">Latest</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGJsYWNrfGVufDB8fHx8MTY1NDg2ODc2OA&amp;ixlib=rb-1.2.1&amp;w=1500"
        className="footer-image"
      />
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
