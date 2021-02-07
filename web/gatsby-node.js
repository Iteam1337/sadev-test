async function createPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(`
    {
      projects: allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
            title
            _type
            _rawRichText(resolveReferences: { maxDepth: 10 })
          }
        }
      }
      newsPosts: allSanityNewsPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const projectEdges = (result.data.projects || {}).edges || []
  const newsPostEdges = (result.data.newsPosts || {}).edges || []

  projectEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node

    const path = `/projekt/${slug.current}/`

    createPage({
      path,
      component: require.resolve('./src/templates/project.js'),
      context: { id },
    })
  })

  newsPostEdges.forEach((edge) => {
    const { id, slug = {} } = edge.node

    const path = `/nyheter/${slug.current}/`

    createPage({
      path,
      component: require.resolve('./src/templates/newsPost.js'),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions)
}
