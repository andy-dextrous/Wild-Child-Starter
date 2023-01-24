import React from "react"
import { graphql } from "gatsby"
import DefaultPage from "gatsby-theme-wild-child/src/components/pages/DefaultPage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components/index"

export const Head = ({ location, data, pageContext }) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default DefaultPage

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
          altText
          databaseId
          localFile {
            childImageSharp {
              gatsbyImageData
              original {
                height
                src
                width
              }
            }
          }
        }
      }
    }
  }
`
