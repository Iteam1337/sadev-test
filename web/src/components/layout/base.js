import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../header'
import '../../base.css'
import SEO from '../seo'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <SEO />
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="pt-24">{children}</main>
    </div>
  )
}

export default Layout
