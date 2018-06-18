import React from 'react'
import Link from 'gatsby-link'

import MenuButton from './MenuButton'
import './Header.css'

const Header = ({ siteTitle, handleMenuToggle, menuOpen }) => (
  <header className="Header">
    <div className="container">
      <Link to="/">{siteTitle}</Link>
      <MenuButton onClick={handleMenuToggle} close={menuOpen} />
    </div>
  </header>
)

export default Header
