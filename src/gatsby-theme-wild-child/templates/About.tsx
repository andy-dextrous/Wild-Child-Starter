import React from "react"
import { graphql, HeadProps } from "gatsby"
import AboutPage from "gatsby-theme-wild-child/src/components/pages/AboutPage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components"

export const Head = ({ location, data, pageContext }: HeadProps) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default AboutPage

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
