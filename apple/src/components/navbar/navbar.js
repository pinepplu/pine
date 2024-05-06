import React, { useState } from 'react';
import './Navbar.css'
import Logo from '../../logos/caramelized-apple-svgrepo-com.png'
import { MagnifyingGlass, UserCircle, ShoppingBag, ListHeart } from '@phosphor-icons/react';

function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={Logo} alt='logo' className='nav-logo' />
        <strong className='logo-text'>PINE</strong>
      </div>

      {/* <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <ListHeart size={32} />
      </div> */}

      {/* <div className={menuOpen ? "open" : ""}> */}
        <div className='search-bar'>
          <input type='text' placeholder='Search'></input>
          <button><MagnifyingGlass size={32} /></button>
        </div>

        <div className='right-side'>
          <div className='profile'>
            <button><UserCircle size={32} /></button>
          </div>

          <div className='cart'>
            <button><ShoppingBag size={32} /></button>
          </div>
        </div>
      {/* </div> */}

    </div>
  )
}

export default Navbar