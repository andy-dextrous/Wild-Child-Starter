import React from "react"
import { graphql } from "gatsby"
import PostPage from "gatsby-theme-wild-child/src/components/pages/PostPage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components"

export const Head = ({ location, data, pageContext }) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default PostPage

const pageQuery = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      uri
      slug
      date(formatString: "DD MMMM YYYY")
      excerpt
      content
      seo {
        readingTime
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(transformOptions: { cropFocus: CENTER })
            }
          }
        }
      }
      id
      link
      status
      template {
        templateName
      }
      author {
        node {
          avatar {
            default
            extraAttr
            foundAvatar
            height
            rating
            scheme
            size
            url
            width
          }
          email
          description
          databaseId
          firstName
          lastName
          name
          nickname
          uri
        }
      }
      categories {
        nodes {
          termTaxonomyId
          taxonomyName
          posts {
            nodes {
              title
              uri
            }
          }
          name
          uri
        }
      }
      modified
      tags {
        nodes {
          uri
          name
          link
        }
      }
    }
  }
`
