const {getSlug} = require('./src/components/helperFunctions')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            template
            title
          }
          id
          fileAbsolutePath
        }
      }
    }
  `)
  
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    if (node.frontmatter.template == 'poem') {
        let slug = "/poems/"+getSlug(node.fileAbsolutePath)
        actions.createPage({
                path: slug,
                component: require.resolve(`./src/templates/poem-template.js`),
                context: { slug: slug, id: node.id, location: node.frontmatter.title },
            })
        }
    })
}
