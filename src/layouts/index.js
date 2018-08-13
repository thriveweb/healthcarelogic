import React, { Fragment } from 'react'
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
    // Lock body scroll
    document.body.style.position = this.state.menuOpen ? 'fixed' : 'initial'
  }

  render() {
    const { children, data } = this.props
    const { menuOpen } = this.state
    const {
      siteTitle,
      siteDescription,
      email,
      phone,
      siteUrl,
      socialMediaCard,
      headerScripts
    } = data.settingsYaml || {}

    return (
      <Fragment>
        <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
          {/* Add font link tags here */}
        </Helmet>

        <Menu active={menuOpen} handleMenuToggle={this.handleMenuToggle} />

        <Header
          siteTitle={siteTitle}
          handleMenuToggle={this.handleMenuToggle}
          menuOpen={menuOpen}
        />

        <Fragment>{children()}</Fragment>

        <Footer siteTitle={siteTitle} siteEmail={email} sitePhone={phone} />
      </Fragment>
    )
  }
}

export default Layout

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      email
      phone
      headerScripts
      socialMediaCard {
        image
      }
    }
  }
`
