import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
import BackgroundImage from '../components/BackgroundImage'
import TeamGrid from '../components/TeamGrid'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'

import './AboutPage.css'

class AboutPageTemplate extends React.Component {
  render() {
    let { title, section1, team } = this.props
    return (
      <main>
        <Helmet>
          <title>{title}</title>
        </Helmet>

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
              to="/a-case-for-change/"
              strong
              icon="page"
              arrow="down"
              scrollButton
            >
              See. Change.
            </Link>
          </div>
        </section>

        <section
          className="section primary thick"
          data-scrollToTarget
          id="team"
        >
          <div className="container skinny">
            <h2 style={{ marginBottom: '4rem' }}>Team</h2>
            <TeamGrid team={team} />
          </div>
        </section>
      </main>
    )
  }
}

const AboutPage = ({ data: { page } }) => (
  <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default AboutPage

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        template
        section1 {
          title
          subtitle
          content
        }
        team {
          slug
          name
          position
          image {
            ...NoBlurImage
          }
        }
      }
    }
  }
`
