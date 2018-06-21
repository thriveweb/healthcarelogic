import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
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
