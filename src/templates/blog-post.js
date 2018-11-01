import React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {Helmet} from "react-helmet"

export default({data}) =>{
    const post = data.markdownRemark
    return(
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{post.frontmatter.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html}}/>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: {
            slug: { eq: $slug} 
        }){
            html
            frontmatter{
                title
            }
        }
    }
`