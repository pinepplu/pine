import React from 'react';
import './Navbar.css'
import Logo from '../../logos/caramelized-apple-svgrepo-com.png'

function Navbar() {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={Logo} alt='logo' className='nav-logo'/> 
        <strong className='logo-text'>PINE</strong>
      </div>
    </div>
  )
}

export default Navbar