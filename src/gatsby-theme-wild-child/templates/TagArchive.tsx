import React from "react"
import { graphql } from "gatsby"
import TagPage from "gatsby-theme-wild-child/src/components/pages/TagPage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components"

export const Head = ({ location, data, pageContext }) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default TagPage

const pageQuery = graphql`
  query ($slug: String!, $limit: Int!, $skip: Int!) {
    allWpPost(
      filter: { tags: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
      sort: { date: DESC }
    ) {
      nodes {
        id
        uri
        slug
        title
        excerpt
        date
        template {
          templateName
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        categories {
          nodes {
            id
            slug
            name
            uri
          }
        }
        author {
          node {
            name
            slug
            uri
            avatar {
              url
            }
          }
        }
        tags {
          nodes {
            name
            slug
            uri
          }
        }
      }
    }
    wpTag(slug: { eq: $slug }) {
      uri
      name
      description
    }
  }
`
