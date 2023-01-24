import React from "react"
import { graphql, HeadProps } from "gatsby"
import CategoryPage from "gatsby-theme-wild-child/src/components/pages/CategoryPage"
import { Seo } from "gatsby-theme-wild-child/src/components/seo/components"

export const Head = ({ location, data, pageContext }: HeadProps) => (
  <Seo ctx={pageContext} data={data} location={location} />
)

export default CategoryPage

const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!, $slug: String!) {
    wpPage(isPostsPage: { eq: true }) {
      title
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        uri
        slug
        title
        excerpt
        date(formatString: "DD MMMM YYYY")
        seo {
          readingTime
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
        categories {
          nodes {
            id
            slug
            name
            uri
          }
        }
        template {
          templateName
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
    allWpCategory(filter: { count: { gt: 0 } }) {
      edges {
        node {
          name
          id
          uri
          slug
        }
      }
    }
  }
`
