import React from 'react';

import { Navbar, Header, Hero, Hero2, Hero3, Hero4, WhyELEARN, Footer, Community} from './containers'

import { Features, Credits } from './components' 

const App = () => {
  return (
    <div>
      <div className='bg__color'>
      <Navbar />
      <Header />
      </div>
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <WhyELEARN />
      <Community />
      <Footer />
      <Credits />
    </div>
  )
}

export default App