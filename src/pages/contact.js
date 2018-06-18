import React from 'react'
import Link from '../components/Link'

import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import './contact.css'

const ContactPage = () => (
  <main>
    <section className="section primary thick">
      <div className="container skinny">
        <h1>Contact Us</h1>
        <div className="ContactPage--grid">
          <div className="ContactPage--grid--column">
            <p className="statement">
              For further information, contact us today
            </p>
            <div className="ContactPage--item">
              <h5>Address</h5>
              <p>
                1263 Mission Street, Floor 3<br />Brisbane 94103
              </p>
            </div>
            <div className="ContactPage--item">
              <h5>Phone</h5>
              <p>
                <a href="tel:476 456 300" className="subtle" target="_blank">
                  476 456 300
                </a>
              </p>
            </div>
            <div className="ContactPage--item">
              <h5>Mail</h5>
              <p>
                <a
                  href="mailto:info@healthcarelogic.com.au"
                  className="subtle"
                  target="_blank"
                >
                  info@healthcarelogic.com.au
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

export default ContactPage
