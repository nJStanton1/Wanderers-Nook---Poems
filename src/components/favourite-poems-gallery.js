import * as React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from 'gatsby'
import {micromark} from 'micromark'
import parse from 'html-react-parser'
import { InternalButton } from './button'
const {getSlug} = require('./helperFunctions')

// Define components
const FavouritePoemsGallery = () => {
    // Do working if needed here
    const favouritePoems = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "poem"}, favourite: {eq: true}}}
        sort: {frontmatter: {date: ASC}}
      ) {
        nodes {
          frontmatter {
            title
            poem
            heroImage {
              childImageSharp {
                gatsbyImageData(aspectRatio: 0.5625)
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
  `)
    
    //Return final layout here
    return (
        <div id="favourite-poems" className='w-full pt-4'>
            <div className="flex flex-col">
                {favouritePoems.allMarkdownRemark.nodes.map( (favouritePoem, i) => (
                    <div key={favouritePoem.frontmatter.title + "-" + i} className="w-full flex flex-row gap-4 my-8 py-8 border-t-2 accent-border">
                        <div className="flex w-1/5">
                            {favouritePoem.frontmatter.heroImage &&
                              <GatsbyImage
                                  image={getImage(favouritePoem.frontmatter.heroImage?.childImageSharp?.gatsbyImageData)}
                                  className='w-full flex self-start'
                                  objectFit='contain'
                              />
                            }
                        </div>
                        
                        <div className="flex flex-col w-4/5">
                            <h2>{favouritePoem.frontmatter.title}</h2>
                            {parse(micromark(favouritePoem.frontmatter.poem))}
                            <div className="flex flex-row-reverse">
                                <InternalButton text="Learn what inspired this poem" linkTo={"/poems/" + getSlug(favouritePoem.fileAbsolutePath)}/>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        </div>
    )
}

  // Define prop types

  // Exports
export default FavouritePoemsGallery