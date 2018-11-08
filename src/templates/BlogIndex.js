import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import PostSection from '../components/PostSection'
import PostCategoriesNav from '../components/PostCategoriesNav'
import BackgroundImage from '../components/BackgroundImage'
import bgEmblem3d from '../images/bg-emblem-3d-white.svg'

// Export Template for use in CMS preview
export const BlogIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  posts = [],
  postCategories = [],
  contentType
}) => {
  const now = Date.now()
  posts = posts.filter(post => {
    const date = () => {
      let myDate = post.date
      myDate = myDate.split('-')
      let newDate = myDate[1] + '/' + myDate[0] + '/' + myDate[2]
      return Date.parse(myDate)
    }
    return date() <= now
  })
  const isCategory = contentType === 'postCategories'
  const byCategory = post =>
    post.categories &&
    post.categories.filter(cat => cat.category === title).length
  const filteredPosts = isCategory ? posts.filter(byCategory) : posts

  return (
    <main className="Blog">
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

        <div className="container skinny relative ">
          <h1>{title}</h1>

          {!!postCategories.length && (
            <PostCategoriesNav categories={postCategories} />
          )}

          {!!posts.length && <PostSection posts={filteredPosts} />}
        </div>
      </section>
    </main>
  )
}

// Export Default BlogIndex for front-end
const BlogIndex = ({ data }) => {
  console.log(data.posts)
  return (
    <BlogIndexTemplate
      {...data.page}
      {...data.page.fields}
      {...data.page.frontmatter}
      posts={data.posts.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
      postCategories={data.postCategories.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields
      }))}
    />
  )
}

export default BlogIndex

export const pageQuery = graphql`
  ## Query for BlogIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query BlogIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date
            categories {
              category
            }
            featuredImage {
              ...SmallImage
            }
          }
        }
      }
    }
    postCategories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "postCategories" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
