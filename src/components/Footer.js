import React from 'react'
import Link from 'gatsby-link'

import './Footer.css'

const Footer = ({ siteTitle }) => (
  <footer>
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
