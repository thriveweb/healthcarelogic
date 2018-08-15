import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
import Image from '../components/Image'

import './TeamMember.css'

// Export Template for use in CMS preview
export const TeamMemberTemplate = ({
  template,
  slug,
  title,
  image,
  position,
  description
}) => (
  <main className="TeamMember">
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <section className="section dark thick vh-90">
      <div className="container skinny">
        <div className="TeamMember--Wrap">
          <div className="TeamMember--Content">
            <h1>{title}</h1>
            {position && <h4>{position}</h4>}
            <Content src={description} />
          </div>
          <div className="TeamMember--Image">
            <Image src={image} alt={title} />
          </div>
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

const TeamMember = ({ data: { page } }) => (
  <TeamMemberTemplate {...page.frontmatter} body={page.html} />
)

export default TeamMember

export const pageQuery = graphql`
  query TeamMember($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        template
        slug
        title
        image {
          ...NoBlurImage
        }
        position
        description
      }
    }
  }
`
