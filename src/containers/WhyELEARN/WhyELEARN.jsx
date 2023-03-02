import React from 'react'
import { Features } from '../../components'
import './whyelearn.css'




const WhyELEARN = () => {
  return (
    <div className='e-learn__whyELEARN__content px-6 py-10 '>
      <div className="e-learn__whyELEARN__container ">
        <div className="e-learn__whyELEARN__text max-width">
          <h1 className='title'>Why E-learn?</h1>
          <div className="e-learn__whyELEARN__text__grid">
            <Features title="Personalized learning" text="Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning."/>
            <Features title="Trusted Content" text="Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
" />
            <Features title="Tools to empower teachers" text="Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.
"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyELEARN