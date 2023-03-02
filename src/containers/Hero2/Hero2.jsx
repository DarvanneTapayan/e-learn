import React from 'react'
import './hero2.css'
import Hero2img from '../../assets/Hero2.png'

const Hero2 = () => {
  return (
    <div className='e-learn__hero2-content bg__color py-20'>
      <div className="e-learn__hero2-content_container max-width px-6">
        <div className="e-learn__hero2-content-text">
          <h1 className='title title-gradient'>E-learning is a powerful tool to unlock your potential.</h1>
          <p className='des-text'>Unleash your boundless potential and transform your life with the unparalleled opportunities that come with unlocking your true potential."</p>
        </div>
        <div className="e-learn__hero2-content-image">
          <img src={ Hero2img } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero2