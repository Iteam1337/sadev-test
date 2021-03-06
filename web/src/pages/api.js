import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BlockContent from '../components/blockContent'
import ArticleSideMenu from '../components/articleSideMenu'
import * as Typography from '../components/typography'
import SEO from '../components/seo'
import * as Layout from '../components/layout'
import * as Links from '../components/links'

const query = graphql`
  query api {
    allSanityApi(sort: { order: DESC, fields: _createdAt }) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          description
          _type
          order
        }
      }
    }
    sanityApiPage {
      pageName
      _rawBody(resolveReferences: { maxDepth: 10 })
      keywords
    }
    sanitySiteSettings {
      keywords
      title
      description
    }
  }
`

const Component = () => {
  const {
    sanityApiPage: data,
    allSanityApi,
    sanitySiteSettings = {},
  } = useStaticQuery(query)
  const apis = allSanityApi.edges.map(({ node }) => node) || []

  if (!data && !Boolean(apis.length))
    return <h2 className="text-xl">Data saknas....</h2>

  apis.sort((a, b) => a.order - b.order)

  return (
    <Layout.FlexWrapper>
      <SEO
        title={data.pageName || sanitySiteSettings.title}
        description={data.description || sanitySiteSettings.description}
        keywords={data.keywords || sanitySiteSettings.keywords}
      />
      <Layout.Aside>
        <ArticleSideMenu title={'API:er'} posts={apis} url={'api'} />
      </Layout.Aside>
      <Layout.Article>
        <Typography.H1>{data.pageName}</Typography.H1>
        <BlockContent blocks={data._rawBody} withAnchor={true} />
        {Boolean(apis.length) && (
          <div className="mt-16">
            {apis.map((item) => (
              <div className="mb-8 group font-semibold" key={item.title}>
                <Links.Basic label={item.title} to={item.slug.current}>
                  {item.title}
                </Links.Basic>
                <Typography.Description>
                  {item.description}
                </Typography.Description>
              </div>
            ))}
          </div>
        )}
      </Layout.Article>
    </Layout.FlexWrapper>
  )
}

export default Component
