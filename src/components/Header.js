import React from 'react'
import Link from 'gatsby-link'

import './Header.css'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="container">
      <Link to="/">{siteTitle}</Link>
    </div>
  </header>
)

export default Header
