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

    const absoluteImageUrl = `${siteUrl}/card-og.jpg`

    return (
      <Fragment>
        <Helmet defaultTitle={siteTitle} titleTemplate={`%s | ${siteTitle}`}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <meta
            name="msvalidate.01"
            content="B0112812CA622A13C327AF572E2BA5B5"
          />
          <meta
            name="google-site-verification"
            content="u7PuEsbocVgyS2ZclTrpzmYZJJB7B_5Ji4wVEK9TMx0"
          />
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
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#2b5797" />
          <meta name="theme-color" content="#ffffff" />

          {absoluteImageUrl && (
            <meta name="twitter:card" content="summary_large_image" />
          )}
          {absoluteImageUrl && (
            <meta property="og:image" content={absoluteImageUrl} />
          )}

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-112589638-13"
          />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'UA-112589638-13');
              `}
          </script>
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
      siteUrl
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
