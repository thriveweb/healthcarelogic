import React from 'react'
import Link from 'gatsby-link'

import MenuButton from './MenuButton'
import './Header.css'

const Header = ({ siteTitle, handleMenuToggle, menuOpen }) => {
  const handleLogoClick = () => menuOpen && handleMenuToggle()
  return (
    <header className="Header">
      <div className="container">
        <Link to="/" onClick={handleLogoClick}>
          {siteTitle}
        </Link>
        <MenuButton onClick={handleMenuToggle} close={menuOpen} />
      </div>
    </header>
  )
}

export default Header
