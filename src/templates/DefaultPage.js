import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Meta from '../components/Meta'

// Export Template for use in CMS preview
export const DefaultPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body,
  meta
}) => (
  <main className="DefaultPage">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Meta {...meta} />

    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

const DefaultPage = ({ data: { page } }) => (
  <DefaultPageTemplate {...page.frontmatter} body={page.html} />
)
export default DefaultPage

export const pageQuery = graphql`
  query DefaultPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        featuredImage {
          ...FluidImage
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
