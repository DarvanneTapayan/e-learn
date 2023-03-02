import React from 'react'
import './Features.css'


const Features = ({ title, text}) => {
  return (
    <div className='e-elearn__features-container'>
      <div className='e-learn__features__sm-bl'>
      </div>
      <div className="e-learn__features__title">
        <h1> { title } </h1>
      </div>
      <div className="e-learn__features__text">
        <p className='des-text'> { text } </p>
      </div>
    </div>
  )
}

export default Features