import { Layout, Padding } from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import {micromark} from 'micromark'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


function PoemPage ({ data }) {
    const pageInfo = data.markdownRemark
    return (
      <Layout subdomain="poems">
        <div className="flex flex-row gap-10">
          {pageInfo.frontmatter.heroImage &&
          <div className="flex w-1/5">
            <GatsbyImage
              image={getImage(pageInfo.frontmatter.heroImage?.childImageSharp?.gatsbyImageData)}
            />
          </div>
          }
          <div className="flex flex-col w-4/5 justify-end">
            <h1 className="">{pageInfo.frontmatter.title}</h1>
            <p>{pageInfo.frontmatter.date}</p>
            {pageInfo.frontmatter.abstract && <p>{pageInfo.frontmatter.abstract}</p>}
          </div>
        </div>

        <div className="my-10 border-l-2 accent-border pl-8">
            {parse(micromark(pageInfo.frontmatter.poem))}
        </div>
        {pageInfo.frontmatter.inspiration && 
          <div>
            <h2>The Inspiration</h2>
            {parse(micromark(pageInfo.frontmatter.inspiration))}
          </div>}
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
        heroImage {
          childImageSharp {
            gatsbyImageData(aspectRatio: 0.5625)
          }
        }
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