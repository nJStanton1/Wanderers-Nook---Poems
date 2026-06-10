import { Layout, Padding } from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import {micromark} from 'micromark'
import parse from 'html-react-parser'

function PoemPage ({ data }) {
    const pageInfo = data.markdownRemark
    return (
      <Layout subdomain="poems">
        <h1 className="">{pageInfo.frontmatter.title}</h1>
        <p>{pageInfo.frontmatter.date}</p>
        <p>{pageInfo.frontmatter.abstract}</p>

        <div className="my-10">
            {parse(micromark(pageInfo.frontmatter.poem))}
        </div>
        <div>
            <h2>The Inspiration</h2>
            {parse(micromark(pageInfo.frontmatter.inspiration))}
        </div>
      </Layout>
    )
}

export default PoemPage

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        abstract
        date
        favourite
        poem
        inspiration
        gallery {
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          caption
          captionDesc
        }
      }
    }
  }
`