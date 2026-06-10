import * as React from "react"
import { Layout, Padding } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalSearchButton, InternalButton } from "../components/button"
import Seo from "../components/seo"
import { AnchorMenu, AnchorButton } from "../components/anchor-menu"
import FavouritePoemsGallery from "../components/favourite-poems-gallery"

const IndexPage = () => {
  return (
    <Layout subdomain={'poems'}>
      <div className="flex flex-row gap-6">
        <StaticImage 
          className="w-1/3"
          src="../../static/images/Coenathus.jpg"
        />
        <div className="w-2/3 content-center">
          <h1 className="text-left text-3xl md:text-6xl lg:text-6xl pr-4">El's Poems</h1>
          <p className="w-full text-left mb-2 md:mb-0 pr-4">Welcome to El's Poems, where she often regrets writing about fucking robins.</p>
        </div>
      </div>

      <AnchorMenu>
        <AnchorButton text={'Favourite Poems'} link={'#favourite-poems'}/>
        <AnchorButton text={'All My Poems'} link={'/poems'}/>
        <AnchorButton text={'Photo Inspiration'} link={''}/>
      </AnchorMenu>

      <Padding>
        <div id="favourite-poems" className='w-full pt-4'>
          <h2>Favourite Poems</h2>

          <FavouritePoemsGallery />

        </div>

      </Padding>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo 
  pageTitle={"Hub"}
  pageDescription={"Hub page for the Wanderer's Nook. Find your interest in outdoors."}
  >
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  </Seo>
