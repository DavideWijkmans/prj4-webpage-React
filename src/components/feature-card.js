import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className={`feature-card-container ${props.rootClassName} `}>
      <h5 className="feature-card-text headingThree">{props.title}</h5>
      <span className="feature-card-text1">{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  text: 'Get the latest design ideas and turn it into reality.',
  title: 'Design',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard
