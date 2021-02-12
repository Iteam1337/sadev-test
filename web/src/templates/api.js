import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/blockContent'
import Layout from '../components/layout'
import SEO from '../components/seo'
import TableOfContents from '../components/tableOfContents'

export const query = graphql`
  query sanityApi($id: String!) {
    sanityApi(id: { eq: $id }) {
      id
      slug {
        current
      }
      title
      descriptionText
      tableOfContents
      _type
      _rawBody(resolveReferences: { maxDepth: 10 })
    }
  }
`

const Component = (props) => {
  const {
    data: { sanityApi: data },
  } = props

  return (
    <Layout>
      <SEO
        title={data.title}
        article={true}
        description={data.descriptionText}
      />
      <div className="flex justify-center">
        <h1>{data.title}</h1>
        {data.tableOfContents && <TableOfContents blocks={data._rawBody} />}
        <BlockContent blocks={data._rawBody} withAnchor={true} />
      </div>
    </Layout>
  )
}

export default Component
