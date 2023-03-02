import React from 'react'
import './hero.css'
import Hero1 from '../../assets/Hero1.png'

const Hero = () => {
  return (
    <div className='e-learn__hero1-content py-20 '>
      <div className="max-width e-learn__hero1-content_container px-6">
        <div className="e-learn__hero1-left-image">
          <img src={ Hero1 } alt="/" />
        </div>
        <div className="e-learn-hero1-right-text">
          <h1 className='title title-gradient-2'>Are you prepared to expand your knowledge?</h1>
          <p className='des-text'>Align your actions with your aspirations, take the first step today to explore new horizons and unlock your full potential, leading to unparalleled success and fulfillment.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero