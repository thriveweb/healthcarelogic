import React from 'react'

import Link from './Link'
import emblem from '../images/emblem.svg'

import './Footer.css'

const Logo = ({ src, href, title }) => (
  <a href={href} target="_blank" className="Footer--Logo">
    <img src={src} alt={title} />
  </a>
)

const Footer = ({ siteTitle, siteEmail, sitePhone }) => (
  <footer className="Footer">
    <section className="section white">
      <div className="container Footer--Container">
        <div className="Footer--Column">
          <Link to="/">
            <img src={emblem} alt={siteTitle} />
          </Link>
        </div>
        <div className="Footer--Column">
          <Link className="h6 subtle" to="/">
            Home
          </Link>
          <Link className="h6 subtle" to="/privacy-policy/">
            Privacy Policy
          </Link>
          <Link className="h6 subtle" to="/about/">
            About Us
          </Link>
        </div>
        <div className="Footer--Column">
          <h6>Follow Us</h6>
        </div>
        <div className="Footer--Column">
          <h6>Quick Contact</h6>
          <a href={`mailto:${siteEmail}`} className="subtle" target="_blank">
            {siteEmail}
          </a>
          <a href={`tel:${sitePhone}`} className="subtle" target="_blank">
            {sitePhone}
          </a>
        </div>
      </div>
    </section>
    <section className="section thin white Footer--Lower">
      <div className="container">
        &copy; {new Date().getFullYear()} All Rights Reserved |{' '}
        <a
          className="subtle"
          href="https://thriveweb.com.au"
          target="_blank"
          rel="noopener"
          title="Web Design Gold Coast"
        >
          Website By Thrive
        </a>
      </div>
    </section>
  </footer>
)

export default Footer
