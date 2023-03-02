import React from 'react'
import './hero3.css'
import Hero3img from '../../assets/Hero3.png'

const Hero3 = () => {
  return (
    <div className='e-learn__hero3-content'>
        <div className="e-learn__hero3-content_container max-width px-6 py-10">
          <div className="e-learn__hero3__content__left-image">
            <img src={Hero3img} alt="" />
          </div>
          <div className="e-learn__hero3__content__right-text">
              <div className="e-learn___hero3__right-box">
                <div className="e-learn__hero3__right-box__title">
                  <h3>Quizzes and Reviews</h3>
                </div>
                <div className="e-learn__hero3__right-box__text">
                  <p className='des-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure hic expedita et repellat eveniet harum reprehenderit amet nobis sint.</p>
                </div>
              </div>
              <div className="e-learn___hero3__right-box">
                <div className="e-learn__hero3__right-box__title">
                  <h3>Self-paced Learning</h3>
                </div>
                <div className="e-learn__hero3__right-box__text">
                  <p className='des-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure hic expedita et repellat eveniet harum reprehenderit amet nobis sint.</p>
                </div>
              </div>
              <div className="e-learn___hero3__right-box">
                <div className="e-learn__hero3__right-box__title">
                  <h3>Certifications</h3>
                </div>
                <div className="e-learn__hero3__right-box__text">
                  <p className='des-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure hic expedita et repellat eveniet harum reprehenderit amet nobis sint.</p>
                </div>
              </div>
              <div className="e-learn___hero3__right-box">
                <div className="e-learn__hero3__right-box__title">
                  <h3>Metrics</h3>
                </div>
                <div className="e-learn__hero3__right-box__text">
                  <p className='des-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque iure hic expedita et repellat eveniet harum reprehenderit amet nobis sint.</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Hero3