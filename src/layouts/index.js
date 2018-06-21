import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import cheet from 'cheet.js'
import 'modern-normalize/modern-normalize.css'

import './globalStyles.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

class Layout extends React.Component {
  state = {
    menuOpen: false
  }

  handleMenuToggle = e => {
    // if (e) e.preventDefault()
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  updateBodyStyle = () => {
    if (typeof window === 'undefined') return false
    document.body.style.position = this.state.menuOpen ? 'fixed' : 'initial'
  }

  componentDidMount() {
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', () => this.start())
  }

  start = () => {
    this.hue = (this.hue || 0) + 1
    document.body.style.filter = `hue-rotate(${this.hue}deg)`
    window.requestAnimationFrame(this.start)
  }

  render() {
    const { children, data } = this.props
    const { menuOpen } = this.state

    this.updateBodyStyle()

    return (
      <div>
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400"
            rel="stylesheet"
          />
          <link href="/fonts/fonts.css" rel="stylesheet" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>

        <Menu active={menuOpen} handleMenuToggle={this.handleMenuToggle} />

        <Header
          siteTitle={data.site.siteMetadata.title}
          handleMenuToggle={this.handleMenuToggle}
          menuOpen={menuOpen}
        />

        {children()}

        <Footer
          siteTitle={data.site.siteMetadata.title}
          siteEmail={data.site.siteMetadata.email}
          sitePhone={data.site.siteMetadata.phone}
        />
      </div>
    )
  }
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        email
        phone
      }
    }
  }
`
