import React from 'react'

import './footer-gray.css'

const FooterGray = (props) => {
  return (
    <footer className="footer-gray-footer">
      <div className="footer-gray-divider"></div>
      <div className="footer-gray-container">
        <div className="footer-gray-container1">
          <div className="footer-gray-container2">
            <span className="footer-gray-text">Our social media</span>
            <span className="footer-gray-text01">Social</span>
            <div className="footer-gray-container3">
              <svg viewBox="0 0 1024 1024" className="footer-gray-icon">
                <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
              </svg>
            </div>
          </div>
          <div className="footer-gray-container4">
            <div className="footer-gray-container5">
              <span className="footer-gray-text02 large">Company</span>
              <span className="footer-gray-text03 large">About Us</span>
              <span className="footer-gray-text04 large">Freebies</span>
              <span className="footer-gray-text05 large">Premium Tools</span>
              <span className="footer-gray-text06 large">Blog</span>
            </div>
            <div className="footer-gray-container6">
              <span className="footer-gray-text07 large">Resources</span>
              <span className="footer-gray-text08 large">Login</span>
              <span className="footer-gray-text09 large">Register</span>
              <span className="footer-gray-text10 large">About</span>
            </div>
            <div className="footer-gray-container7">
              <span className="footer-gray-text11 large">
                Help &amp; Support
              </span>
              <span className="footer-gray-text12 large">Contact Us</span>
              <span className="footer-gray-text13 large">Knowledge Center</span>
            </div>
            <div className="footer-gray-container8">
              <span className="footer-gray-text14 large">Legal</span>
              <span className="footer-gray-text15 large">
                Terms &amp; Conditions
              </span>
              <span className="footer-gray-text16 large">Privacy Policy</span>
              <span className="footer-gray-text17 large">Licenses (EULA)</span>
            </div>
          </div>
        </div>
        <span className="footer-gray-text18 small">
          <span>
            All rights reserved. Copyright © 2021 Soft UI Design System by
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="footer-gray-text20">Creative Tim</span>
          <span>.</span>
        </span>
      </div>
    </footer>
  )
}

export default FooterGray
