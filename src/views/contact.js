import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - prj4 webpage</title>
        <meta property="og:title" content="Contact - prj4 webpage" />
      </Helmet>
      <Header></Header>
      <div className="contact-container1">
        <div className="contact-main">
          <div className="contact-container2">
            <h1 className="contact-text headingOne">You Experience With</h1>
            <h1 className="contact-text1">Idle</h1>
            <p className="contact-text2 lead">
              <span className="contact-text3">
                The time is now for it to be okay to be great. Email us y and
                get personalized support!
              </span>
            </p>
            <div className="contact-container3">
              <input
                type="text"
                placeholder="Email here"
                className="contact-textinput small input"
              />
              <SecondaryButton button="CONTACT"></SecondaryButton>
            </div>
          </div>
          <div className="contact-grid">
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="contact-image"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="contact-image01"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%205-1000w.png"
              className="contact-image02"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%203-1000w.png"
              className="contact-image03"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="contact-image04"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%201-1000w.png"
              className="contact-image05"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%204-1000w.png"
              className="contact-image06"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%205-1000w.png"
              className="contact-image07"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="contact-image08"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%201-1000w.png"
              className="contact-image09"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%203-1000w.png"
              className="contact-image10"
            />
            <img
              alt="image"
              src="/playground_assets/iphone%2012%20pro%20max%20%E2%80%93%204-1000w.png"
              className="contact-image11"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-4-1000w.png"
              className="contact-image12"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-1-1000w.png"
              className="contact-image13"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-3-1000w.png"
              className="contact-image14"
            />
            <img
              alt="image"
              src="/playground_assets/iphone-2-1000w.png"
              className="contact-image15"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
