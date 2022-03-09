import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import Link from '../components/Link'
import Content from '../components/Content'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import Hubspot from '../components/Hubspot'
import BackgroundImage from '../components/BackgroundImage'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import './ContactPage.css'
import Meta from '../components/Meta'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  title,
  blurb,
  auAddress,
  ieAddress,
  microsoftContact,
  phone,
  email,
  meta
}) => (
  <main>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Meta {...meta} />

    <section className="section primary thick vh-100">
      <BackgroundImage
        src={bgEmblem3d}
        contain
        animate
        opacity="0.3"
        style={{ top: '15rem', bottom: '5rem' }}
      />
      <div className="container skinny relative">
        <h1>{title}</h1>
        <div className="ContactPage--grid">
          <div className="ContactPage--grid--column">
            <div className="statement">
              <Content src={blurb} />
            </div>

            {auAddress && (
              <div className="ContactPage--item">
                <h5>Australia</h5>
                <p>{auAddress}</p>
              </div>
            )}

            {ieAddress && (
              <div className="ContactPage--item">
                <h5>Ireland</h5>
                <p>{ieAddress}</p>
              </div>
            )}
            
            {microsoftContact && (
              <div className="ContactPage--item">
                <h5>For Microsoft Azure Customers</h5>
                <p>{microsoftContact}</p>
              </div>
            )}

            {phone && (
              <div className="ContactPage--item">
                <h5>Phone</h5>
                <p>
                  <a href={`tel:${phone}`} className="subtle" target="_blank">
                    {phone}
                  </a>
                </p>
              </div>
            )}

            {email && (
              <div className="ContactPage--item">
                <h5>Mail</h5>
                <p>
                  <a
                    href={`mailto:${email}`}
                    className="subtle"
                    target="_blank"
                  >
                    {email}
                  </a>
                </p>
              </div>
            )}
          </div>

          <div className="ContactPage--grid--column">
            <EnquiryFormSimpleAjax name="Contact Form" />
            <Hubspot />
          </div>
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <ContactPageTemplate {...page.frontmatter} body={page.html} />
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        blurb
        auAddress
        ieAddress
        phone
        email
        meta {
          title
          description
          noindex
          canonicalLink
        }
      }
    }
  }
`
