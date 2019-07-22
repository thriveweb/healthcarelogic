import React from 'react'

import Link from './Link'
import MenuButton from './MenuButton'
import logo from '../images/logo.svg'
import './Header.css'

const Header = ({ siteTitle, handleMenuToggle, menuOpen }) => {
  const handleLogoClick = () => menuOpen && handleMenuToggle()
  return (
    <header className="Header">
      <div className="container">
        <Link to="/" onClick={handleLogoClick}>
          <img className="Header--Logo" src={logo} alt={siteTitle} />
        </Link>

        <div>
          <Link to="/">Home</Link>
          <Link to="/a-case-for-change/">A case for change</Link>
          <Link to="/a-better-view/">A better view</Link>
          <Link to="/about/">About us</Link>
          <Link to="/contact/">Contact us</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
