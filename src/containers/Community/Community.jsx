import React from 'react'
import teachers from '../../assets/teachers.png'

import './community.css'

const Community = () => {
  return (
    <div className='e-learn__community-content bg__color py-20 px-6'>
        <div className="e-learn__community-container max-width ">
            <div className="e-learn__community-box ">
                <div className="e-learn__community-text">
                    <h1>Join e- Learn teachers community</h1>
                    <p className='des-text'>Behind every stock image, there`s a creative mind. You can also create content and sell it on Freepik</p>
                    <button>Become a Teacher</button>
                </div>
                <div className="e-learn__community-image">
                    <img className='teacher' src= { teachers } alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community