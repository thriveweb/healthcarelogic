import React from 'react'
import Facebook from 'react-feather/dist/icons/facebook'
import Twitter from 'react-feather/dist/icons/twitter'
import SubscribeForm from '../components/SubscribeForm'

import Link from './Link'
import ScrollToTop from './ScrollToTop'
import emblem from '../images/emblem.svg'
import privacyPolicy from '../images/HCL_Website Privacy Policy.pdf'

import './Footer.css'

const Logo = ({ src, href, title }) => (
  <a href={href} target="_blank" className="Footer--Logo">
    <img src={src} alt={title} />
  </a>
)

const Footer = ({ siteTitle, siteEmail, sitePhone }) => (
  <footer id="bottom" className="Footer">
    <section className="section white">
      <div className="container Footer--Container">
        <div className="Footer--Column">
          <Link to="/">
            <img src={emblem} alt={siteTitle} />
          </Link>
        </div>

        <div className="Footer--Column subscribe">
          <p className="subscribe-text">
            Download SystemView unpacked - it's interactive and explains the
            value behind each component. We promise not to spam you or sell your
            details to anyone! We will occasionally send you some interesting
            information about the world of data analytics.
          </p>
          <SubscribeForm />
        </div>

        <div className="Footer--Column toTop">
          <Link href="#" strong arrow="up">
            To Top
          </Link>
        </div>

        {/* <div className="Footer--Column">
          <Link className="h6 subtle" to="/">
            Home
          </Link>
          <Link className="h6 subtle" to="/about/">
            About Us
          </Link>
          <Link className="h6 subtle" to="/contact/">
            Contact Us
          </Link>
        </div> */}
        {/* <div className="Footer--Column">
          <h6>Follow Us</h6>
          <div className="flex">
            <a
              className="subtle"
              style={{ padding: '0.2em' }}
              href="/"
              target="_blank"
              rel="nofollow"
            >
              <Facebook />
            </a>
            <a
              className="subtle"
              style={{ padding: '0.2em' }}
              href="/"
              target="_blank"
              rel="nofollow"
            >
              <Twitter />
            </a>
          </div>
        </div> */}
        {/* <div className="Footer--Column">
          <h6>Quick Contact</h6>
          <a href={`mailto:${siteEmail}`} className="subtle" target="_blank">
            {siteEmail}
          </a>
          {sitePhone && (
            <a href={`tel:${sitePhone}`} className="subtle" target="_blank">
              {sitePhone}
            </a>
          )}
        </div> */}
      </div>
    </section>
    <section className="section thin white Footer--Lower">
      <div className="container">
        &copy; {new Date().getFullYear()} All Rights Reserved |{' '}
        <a href={privacyPolicy} target="_blank" className="subtle">
          Privacy Policy
        </a>{' '}
        |{' '}
        <a
          className="subtle"
          href="https://thriveweb.com.au"
          target="_blank"
          rel="noopener noreferrer"
          title="Web Design Gold Coast"
        >
          Website By Thrive
        </a>
      </div>
    </section>
    <script
      type="text/javascript"
      id="hs-script-loader"
      async
      defer
      src="//js.hs-scripts.com/7321348.js"
    ></script>
  </footer>
)

export default Footer
