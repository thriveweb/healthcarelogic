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
      </div>
      <div className="Header--Fixed">
        <div className="container">
          <MenuButton onClick={handleMenuToggle} close={menuOpen} />

          <div className="full-nav">
            <Link to="/">Home</Link>
            <Link to="/a-case-for-change/">A case for change</Link>
            <Link to="/a-better-view/">A better view</Link>
            <Link to="/about/">About us</Link>
            <Link to="/work-with-us/">Work with us</Link>
            <div className="sub-nav" title="Investors hub" id="collasible-nav-dropdown">
              <Link to="/announcements/">Announcements</Link>
              <Link to="/governance">Governance</Link>
              <Link to="/blog/">News</Link>
            </div>
            <Link to="/contact/">Contact us</Link>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
