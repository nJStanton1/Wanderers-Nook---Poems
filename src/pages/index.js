import * as React from "react"
import { Layout, Padding } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalSearchButton, InternalButton } from "../components/button"
import Seo from "../components/seo"
import { AnchorMenu, AnchorButton } from "../components/anchor-menu"

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
        <AnchorButton text={'Favourite Poems'} link={'#route-overview'}/>
        <AnchorButton text={'All My Poems'} link={'#image-gallery'}/>
        <AnchorButton text={'Photo Inspiration'} link={'#getting-there'}/>
      </AnchorMenu>

      <Padding>
        <div className='w-full pt-4'>
          <h2>Favourite Poems</h2>

          <div className="w-full flex flex-row gap-4 my-8 py-8 border-t-2 accent-border">
            <div className="flex w-1/5">
              <StaticImage 
                className="w-full flex self-start "
                objectFit='contain'
                src="../../static/images/Luna.jpg"
              />
            </div>
            
            <div className="flex flex-col w-4/5">
              <h3>Robin Poem</h3>
              <p>If souls scatter on the wind<br />And become a new thing<br />I think you'll be a robin the shed.</p>
              <p>On your death bed<br />The sun was shining<br />The grass so green, the sky so blue<br />And in the shed you had built<br />In the garden outside your bedroom window<br />The robins flew<br />In and out of that gap above the door<br />Where the hinge had slipped<br />It was a perfect fit<br />They came and went<br />Collecting straw and food<br />And stood watch on the fence<br />As you drew your laast breath.</p>
              <p>Gran listed everyone that loved you<br />Held your hand, stroked your hair<br />And peacefully you left.</p>
              <p>And so if souls scatter on the wind<br />And become a new thing<br />You'll be born again with a red breast<br />Land on your own shed<br />And sit with us on sunny days<br />Whilst we talk about all the memories you made.</p>
              <div className="flex flex-row-reverse">
                <InternalButton text="Learn what inspired this poem" linkTo=""/>
              </div>
            </div>
          </div>

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
