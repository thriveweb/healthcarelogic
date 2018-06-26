import React from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'

import Link from '../components/Link'
import BackgroundImage from '../components/BackgroundImage'
import TeamGrid from '../components/TeamGrid'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'

const AboutPage = ({ data }) => {
  const team = _get(data, 'team.edges').map(edge => edge.node)

  return (
    <main>
      <Helmet>
        <title>Our story</title>
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
          <h1>Our story</h1>
          <div
            style={{
              columns: '2',
              columnGap: '5rem'
            }}
          >
            <p className="statement">
              Healthcare Logic is committed to developing software that helps
              clinical and managerial leaders improve the performance of their
              hospitals.
            </p>
            <p>
              Having worked in strategic health improvement for almost two
              decades across five countries and three continents, founder and
              CEO Martin Connor is driven by the remarkable fact there is no
              international standard definition of the appropriate data required
              to operationally manage a hospital.
            </p>
            <p>
              Our software has changed that and is already being used in more
              than 50 hospitals where it is optimising performance in areas such
              as Outpatients, Surgery and Theatres, Endoscopy, Emergency
              Departments and Inpatient Bed Management.
            </p>
            <p>
              Too much hospital reporting is not interesting, let alone
              important. The question we constantly ask ourselves is - can we
              get an action out of the data we are producing? If the answer is
              no, we throw it out. If it is yes, we keep it and get ready to
              take action.
            </p>
            <p>
              In search of a solution to many of the global challenges facing
              hospitals, we have created a common language that is helping solve
              the dilemma of capacity, demand and process and showing there is a
              simpler, cheaper and better way.
            </p>
          </div>
          <Link
            to="/a-broken-system/"
            strong
            icon="page"
            arrow="down"
            scrollButton
          >
            See. Change.
          </Link>
        </div>
      </section>

      <section className="section primary thick" data-scrollToTarget>
        <div className="container skinny">
          <h2 style={{ marginBottom: '4rem' }}>Team</h2>
          <TeamGrid team={team} />
        </div>
      </section>
    </main>
  )
}
export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery {
    team: allMarkdownRemark(
      filter: { fields: { slug: { glob: "/team/**" } } }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            image
          }
        }
      }
    }
  }
`
