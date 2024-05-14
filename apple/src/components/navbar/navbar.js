import React, { useState } from 'react';
import './Navbar.css'
import Logo from '../../logos/caramelized-apple-svgrepo-com.png'
import { MagnifyingGlass, UserCircle, ShoppingBag, ListHeart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Navbar() {
  // const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='nav-container'>
      <div className='logo'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <img src={Logo} alt='logo' className='nav-logo' />
          <strong className='logo-text'>PINE</strong>
        </Link>
      </div>

      {/* <div className='menu' onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <ListHeart size={32} />
      </div> */}

      {/* <div className={menuOpen ? "open" : ""}> */}
      <section className='search-bar'>
        <input type='text' placeholder='Search'></input>
        <button><MagnifyingGlass size={32} /></button>
      </section>

      <section className='right-side'>
        <div className='profile'>
          <Link to="/profile">
            <button><UserCircle size={32} /></button>
          </Link>
        </div>

        <div className='cart'>
          <Link to="/cart">
            <button><ShoppingBag size={32} /></button>
          </Link>
        </div>
      </section>
      {/* </div> */}

    </div>
  )
}

export default Navbar