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
    let { title, section1, board, leadership, meta } = this.props
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

        <section className="section primary thick" id="team">
          <div className="container skinny">
            <h2 style={{ marginBottom: '4rem' }}>The Board</h2>
            <TeamGrid team={board || []} />
            <br />
            <br />
            <h2 style={{ marginBottom: '4rem' }}>Leadership Team</h2>
            <TeamGrid team={leadership || []} />
          </div>

          <Link to="/contact/" strong icon="page" arrow="right" scrollButton>
            Contact us
          </Link>
        </section>
      </main>
    )
  }
}

const AboutPage = ({ data: { page, board, leadership } }) => (
  <AboutPageTemplate
    {...page}
    {...page.frontmatter}
    body={page.html}
    board={board.edges.map(post => ({
      ...post.node,
      ...post.node.frontmatter,
      ...post.node.fields
    }))}
    leadership={leadership.edges.map(post => ({
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
    board: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "board" } } }
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
    leadership: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "leadership" } } }
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
