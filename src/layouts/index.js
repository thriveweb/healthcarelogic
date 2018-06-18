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
    menuOpen: true
  }

  handleMenuToggle = e => {
    // if (e) e.preventDefault()
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  updateBodyStyle = () => {
    if (typeof window === undefined) return false
    document.body.style.position = this.state.menuOpen ? 'fixed' : 'initial'
  }

  render() {
    const { children, data } = this.props
    const { menuOpen } = this.state

    this.updateBodyStyle()

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
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

        <Footer siteTitle={data.site.siteMetadata.title} />
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
      }
    }
  }
`
