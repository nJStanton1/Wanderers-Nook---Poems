// Imports
import * as React from 'react'
import {Layout, Padding} from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import {micromark} from 'micromark'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ExternalSearchButton, InternalButton } from "../../components/button"
const {getSlug} = require('../../components/helperFunctions')


// Define components
const PoemPage = ({data}) =>{
    const {nodes} = data.allMarkdownRemark;

    return (
      <Layout subdomain="poems">
      <Padding>
        <h1 className='w-full'>Poems</h1>
        <p>Here are all the poems I've written.</p>

        <div className='w-full flex flex-wrap justify-around lg:justify-between'>
          {
            nodes.map(poemInfo => (

                <div className="w-full flex flex-col md:flex-row gap-4 my-8 py-8 border-t-2 accent-border">
                    <div className="flex flex-col gap-3 md:gap-0 md:w-1/5">
                        {poemInfo.frontmatter.heroImage &&
                          <GatsbyImage
                            className='max-h-96 max-w-40 md:max-w-none md:max-h-none'
                            image={getImage(poemInfo.frontmatter.heroImage?.childImageSharp?.gatsbyImageData)}
                          />
                        }
                        <p className='border-l-2 accent-border px-2 mt-2'>{poemInfo.frontmatter.date}</p>
                    </div>
                    
                    <div className="flex flex-col w-4/5">
                    <h2>{poemInfo.frontmatter.title}</h2>
                    {parse(micromark(poemInfo.frontmatter.poem))}
                    <div className="flex flex-row-reverse">
                        <InternalButton text="What inspired this poem?" linkTo={"/poems/" + getSlug(poemInfo.fileAbsolutePath)}/>
                    </div>
                    </div>
                </div>
            ))
          }
        </div>
      </Padding>
      </Layout>
    )
}
 
// Export component
export default PoemPage

export const Head = () => {
  
  return(
      <Seo 
      pageTitle="Poems" 
      pageDescription="A compilation of all my poems."
      pageURL="/poems"
    />
  )
}

// Query
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "poem"}}}
      sort: {frontmatter: {date: ASC}}
    ) {
      nodes {
        frontmatter {
          title
          date
          poem
          heroImage {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 0.5625
                layout: CONSTRAINED
                transformOptions: {fit: INSIDE}
              )
            }
          }
        }
        fileAbsolutePath
      }
    }
  }
`