import React from 'react'
import Link from './Link'

import './Menu.css'

export default ({ active, handleMenuToggle }) => {
  const MenuLink = props => (
    <Link
      {...props}
      arrow="right"
      className="Menu--Link"
      onClick={handleMenuToggle}
    />
  )
  return (
    <div className={`Menu ${active ? 'Menu-active' : ''} dark`}>
      <div className="container skinnier">
        <MenuLink to="/a-case-for-change/">A case for change</MenuLink>
        <MenuLink to="/a-better-view/">A better view</MenuLink>
        <MenuLink to="/about/">About us</MenuLink>
        <MenuLink to="/work-with-us/">Work with us</MenuLink>
        <MenuLink to="/contact/">Contact us</MenuLink>
      </div>
    </div>
  )
}
