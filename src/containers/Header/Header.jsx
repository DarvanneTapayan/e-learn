import React from 'react'
import './header.css'
import heroImg from '../../assets/e-learn 2.png'

const Header = () => {
  return (
    <div className='e-learn__hero-content max-width px-6 py-[7rem]'>
        <div className="e-learn__hero-text">
          <h1 className='title title-gradient'>Enrichment is the pathway to achievement!</h1>
          <p className='des-text '>E Learning is an ideal Learning Management System that empowers collaborative learning, facilitates knowledge-sharing, and motivates others to learn and grow together.</p>
          <div className="e-learn__input">
            <input type="email" placeholder='Your Email' />
            <button type='button'>GetStarted</button>
          </div>
          </div>
          <div className="e-learn__right-image">
            <img src={heroImg} alt="/" />
          </div>
    </div>
  )
}

export default Header