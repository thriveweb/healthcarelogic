import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import Accordion from '../components/Accordion'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import Meta from '../components/Meta'

import './WorkPage.css'

export class GovernancePageTemplate extends React.Component {
  render() {
    let { title, section1, accordiantitle, accordion, meta } = this.props

    return (
      <main>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Meta {...meta} />

        {section1 && (
          <section className="section dark thick vh-100">
            <BackgroundImage
              src={bgEmblem3d}
              contain
              animate
              opacity={0.4}
              style={{ top: '20rem', bottom: '20rem' }}
            />

            <div className="container skinny">
              <h1>{section1.title}</h1>
              <div className="About--Intro">
                <p className="statement">{section1.subtitle}</p>
                <Content src={section1.content} />
              </div>
              <Link
                to="#opportunities"
                strong
                icon="page"
                arrow="down"
                scrollButton
              >
                View the opportunities
              </Link>
            </div>
          </section>
        )}

        <section className="section primary thick" id="opportunities">
          <div className="container skinny">
            <h2 style={{ marginBottom: '4rem' }}>{accordiantitle}</h2>
            {console.log(accordion)}
            <Accordion items={accordion} buttonText="Download Document" />
          </div>
        </section>
      </main>
    )
  }
}

const GovernancePage = ({ data: { page } }) => (
  <GovernancePageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default GovernancePage

export const pageQuery = graphql`
  query GovernancePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section1 {
          title
          subtitle
          content
        }
        accordiantitle
        accordion {
          title
          applyLink
          description
        }
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
