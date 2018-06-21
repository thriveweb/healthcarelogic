import React from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

import Link from '../components/Link'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import BackgroundImage from '../components/BackgroundImage'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import './contact.css'

const ContactPage = ({ data }) => {
  const site = _get(data, 'site.siteMetadata')
  return (
    <main>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>

      <section className="section primary thick vh-90">
        <BackgroundImage
          src={bgEmblem3d}
          contain
          animate
          opacity="0.3"
          style={{ top: '15rem', bottom: '5rem' }}
        />
        <div className="container skinny relative">
          <h1>Contact Us</h1>
          <div className="ContactPage--grid">
            <div className="ContactPage--grid--column">
              <p className="statement">
                For further information, contact us today
              </p>
              <div className="ContactPage--item">
                <h5>Address</h5>
                <p>{site.address}</p>
              </div>
              <div className="ContactPage--item">
                <h5>Phone</h5>
                <p>
                  <a
                    href={`tel:${site.phone}`}
                    className="subtle"
                    target="_blank"
                  >
                    {site.phone}
                  </a>
                </p>
              </div>
              <div className="ContactPage--item">
                <h5>Mail</h5>
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="subtle"
                    target="_blank"
                  >
                    {site.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="ContactPage--grid--column">
              <EnquiryFormSimpleAjax name="Contact Form" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage

export const query = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        email
        phone
        address
      }
    }
  }
`
