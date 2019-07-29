import React from 'react'
import Helmet from 'react-helmet'

import Link from '../components/Link'
import Content from '../components/Content'
import Image from '../components/Image'
import Meta from '../components/Meta'

import './TeamMember.css'

// Export Template for use in CMS preview
export const TeamMemberTemplate = ({
  title,
  image,
  position,
  description,
  meta
}) => (
  <main className="TeamMember">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Meta {...meta} />

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
      </div>

      <Link
        to={{ pathname: '/about/', hash: '#team' }}
        strong
        arrow="right"
        scrollButton
      >
        Back
      </Link>
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
        title
        image {
          ...NoBlurImage
        }
        position
        description
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
