import React from 'react'
import './credits.css'
import Logo  from '../../assets/e-learn logo.png'


const Credits = () => {
  return (
    <div className='e-learn__credits '>
        <div className="e-learn__credits-container max-width px-6 py-5">
            <div className="e-learn__credits-left">
                <img className='logo' src= { Logo } alt="" />
                <p>Copyright © E-learn All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Credits