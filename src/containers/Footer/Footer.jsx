import React from 'react'
import './footer.css'
import facebook from '../../assets/facebook.png'
import discord from '../../assets/discord.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <div className='e-learn__footer'>
      <div className="e-learn__footer-grid-links px-6 py-10">
        <div className="e-learn__footer-links">
          <h6>CONTENT</h6>
          <p>Calendar of Events</p>
          <p>Foundation</p>
          <p>Community</p>
          <p>Blog</p>
        </div>
        <div className="e-learn__footer-links">
          <h6>INFORMATION</h6>
          <p>Pricing</p>
          <p>About us</p>
          <p>Business</p>
          <p>Jobs</p>
        </div>
        <div className="e-learn__footer-links">
          <h6>LEGAL</h6>
          <p>Cookies policy</p>
          <p>License agreement</p>
          <p>Copyright information</p>
          <p>Privacy policy</p>
        </div>
        <div className="e-learn__footer-links">
          <h6>SOCIAL MEDIA</h6>
          <div className="e-learn__footer-social-media-links">
            <img src= { facebook } alt="" />
            <img src= { instagram }  alt="" />
            <img src= { twitter } alt="" />
            <img src= { discord } alt="" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer