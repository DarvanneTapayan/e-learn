import React from 'react'
import './hero4.css'
import Hero4img from '../../assets/Hero4.png'

const Hero4 = () => {
  return (
    <div className='e-learn__hero4__content bg__color px-6 py-10'>
      <div className="e-learn__hero4__container">
        <div className="e-learn__hero4__text">
          <h1 className='title title-gradient-2 '>It offers a flexible and convenient way to learn</h1>
          <p className='des-text'>By joining the e-learning revolution, you will gain access to a vast library of courses, experts, and resources, and connect with a global community of learners and instructors. So, what are you waiting for? Take the first step today and unlock your full potential with e-learning.</p>
        </div>
        <div className="e-learn__hero4__image">
          <img src= { Hero4img } alt="Hero4" />
        </div>
      </div>
    </div>
  )
}

export default Hero4