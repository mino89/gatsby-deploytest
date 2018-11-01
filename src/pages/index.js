import React from "react"
import {Link, graphql} from "gatsby"
import {css} from "react-emotion"
import {rhythm} from "../utils/typography"
import Layout from "../components/layout"
import {Helmet} from "react-helmet"
export default ({data}) => {
  console.log(data)
  return (

  <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Amazing Pandas Eating Things</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <h1
      className={css`
        display: inline-block;
        border-bottom: 1px solid;
     `}
    >
      Amazing Pandas Eating Things
    </h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
      <Link to={node.fields.slug}>
        <h3
          className={
            css`
            margin-bottom: ${rhythm(1/4)}
            `
          }
        >
          {node.frontmatter.title}{" "}
          - {node.frontmatter.date}
        </h3>
      </Link>
      <h5>
        <b>
          Reading Time:
        </b>
        {node.timeToRead}
      </h5>
      <p>{node.excerpt}</p>
      </div>
    ))}
  </Layout>
  )
}


export const query = graphql `
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`