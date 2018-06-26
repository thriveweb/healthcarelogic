import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import './TeamMember.css'

const TeamMember = ({ data }) => {
  const {
    teamMember: {
      frontmatter: { title, subtitle, image },
      html
    }
  } = data

  return (
    <main className="TeamMember">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <section className="section dark thick vh-90">
        <div className="container skinny">
          <div className="TeamMember--Wrap">
            <div className="TeamMember--Content">
              <h1>{title}</h1>
              {subtitle && <h4>{subtitle}</h4>}
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <img className="TeamMember--Image" src={image} alt={title} />
          </div>
          <div className="flex">
            <Link
              to={{ pathname: '/about/', hash: '#team' }}
              strong
              icon="page"
              arrow="right"
            >
              Back
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TeamMember

export const pageQuery = graphql`
  query TeamBySlug($slug: String!) {
    teamMember: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        subtitle
      }
    }
  }
`
