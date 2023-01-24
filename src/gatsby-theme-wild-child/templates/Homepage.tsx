import React from "react"
import { graphql } from "gatsby"
import HomepagePage from "gatsby-theme-wild-child/src/components/pages/HomepagePage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components/index"

export const Head = ({ location, data, pageContext }) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default HomepagePage

export const pageQuery = graphql`
  query ($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      title
      content
      uri
      slug
      isFrontPage
      template {
        templateName
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              original {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  }
`
