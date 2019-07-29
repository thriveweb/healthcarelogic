import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import TeamGrid from '../components/TeamGrid'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'
import Meta from '../components/Meta'

import './AboutPage.css'

export class AboutPageTemplate extends React.Component {
  render() {
    let { title, section1, team, meta } = this.props
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
              <Link to="#team" strong icon="page" arrow="down" scrollButton>
                Meet the Team
              </Link>
            </div>
          </section>
        )}

        {team && (
          <section className="section primary thick" id="team">
            <div className="container skinny">
              <h2 style={{ marginBottom: '4rem' }}>Team</h2>
              <TeamGrid team={team} />
            </div>

            <Link to="/contact/" strong icon="page" arrow="right" scrollButton>
              Contact us
            </Link>
          </section>
        )}
      </main>
    )
  }
}

const AboutPage = ({ data: { page, team } }) => (
  <AboutPageTemplate
    {...page}
    {...page.frontmatter}
    body={page.html}
    team={team.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
    }))}
  />
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        section1 {
          title
          subtitle
          content
        }
        meta {
          title
          description
          noindex
          canonicalLink
        }
      }
    }
    team: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "team" } } }
    ) {
      edges {
        node {
          fields {
            slug
            contentType
          }
          frontmatter {
            title
            order
            image {
              ...NoBlurImage
            }
            position
            description
          }
        }
      }
    }
  }
`
