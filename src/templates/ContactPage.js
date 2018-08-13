import React from 'react'
import Helmet from 'react-helmet'
import { MapPin, Smartphone, Mail } from 'react-feather'

import Link from '../components/Link'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import BackgroundImage from '../components/BackgroundImage'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  email,
  phone,
  title,
  address,
  subtitle,
  featuredImage
}) => (
  <main>
    <Helmet>
      <title>Contact Us</title>
    </Helmet>

    <section className="section primary thick vh-100">
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
              <p>{address}</p>
            </div>

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

            <div className="ContactPage--item">
              <h5>Mail</h5>
              <p>
                <a href={`mailto:${email}`} className="subtle" target="_blank">
                  {email}
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
        template
        subtitle
        featuredImage {
          ...FluidImage
        }
        address
        phone
        email
      }
    }
  }
`
