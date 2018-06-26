const _ = require(`lodash`)
const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const teamTemplate = path.resolve(`src/templates/TeamMember.js`)
    graphql(
      `
        {
          team: allMarkdownRemark(
            limit: 1000
            filter: { fields: { slug: { glob: "/team/**" } } }
          ) {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }

      result.data.team.edges.forEach(edge => {
        createPage({
          path: edge.node.fields.slug,
          component: teamTemplate,
          context: {
            slug: edge.node.fields.slug
          }
        })
      })

      resolve()
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)

    createNodeField({
      node,
      name: `slug`,
      value: `/${fileNode.relativeDirectory}/${fileNode.name}/`
    })
  }
}
