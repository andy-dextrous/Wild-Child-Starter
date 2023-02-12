import React from "react"
import { graphql } from "gatsby"
import ContactPage from "gatsby-theme-wild-child/src/components/pages/ContactPage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components"

export const Head = ({ location, data, pageContext }) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default ContactPage

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
