import React from 'react'

import Link from './Link'
import emblem from '../images/emblem.svg'
import './Footer.css'

const Footer = ({ siteTitle }) => (
  <footer>
    <section className="section lightGrey thick">
      <div className="container">
        <Link to="/">
          <img src={emblem} alt={siteTitle} />
        </Link>
      </div>
    </section>

    <section className="section white">
      <div className="container">Footer</div>
    </section>
    <section className="section thin white Footer--lower">
      <div className="container">
        &copy; {new Date().getFullYear()} All Rights Reserved |{' '}
        <a className="subtle" href="https://thriveweb.com.au">
          Built By Thrive
        </a>
      </div>
    </section>
  </footer>
)

export default Footer
