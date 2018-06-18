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
          <img src={logo} alt={siteTitle} />
        </Link>
        <MenuButton onClick={handleMenuToggle} close={menuOpen} />
      </div>
    </header>
  )
}

export default Header
