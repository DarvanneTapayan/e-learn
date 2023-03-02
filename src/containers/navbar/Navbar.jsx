import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import Logo from '../../assets/e-learn logo.png'

const Menu = () => (
  <>
      <li className='e-learn__links__link px-4'>
        <a href="#home">Home</a>
      </li>  
      <li className='e-learn__links__link px-4'>
        <a href="#home">Courses</a>
      </li>  
      <li className='e-learn__links__link px-4'>
        <a href="#home">Blog</a>
      </li>  
      <li className='e-learn__links__link px-4'>
        <a href="#home">Careers</a>
      </li>  
      <li className='e-learn__links__link px-4'>
        <a href="#home">About</a>
      </li>  
      <div className="e-learn__get-started_menu rounder-md">
          <button href="#">Get Started</button>
      </div>
  </>
)
  


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='max-width flex items-center justify-between py-5 px-6'>
      <div className="e-learn__navbar flex  items-center">
        <img className='e-learn__logo ' src={Logo} alt="logo" />
          <ul className='e-learn__links flex pl-10 items-center'>
            <Menu />
          </ul>
      </div>
          <div className="e-learn__get-started rounded-md ml-auto">
            <button href="#">Get Started</button>
          </div>
      <div className="e-learn__navbar-menu">
          { toggleMenu
            ?<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="e-learn__navbar-menu-container rounded-md .slide-left">
              <div className='e-learn__navbar-menu_links'>
                <Menu />
              </div>
            </div>
          )}
      </div>
      </div>
  )
}

export default Navbar