import * as React from "react"
import { Layout, Padding } from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { ExternalSearchButton } from "../components/button"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout subdomain={'hub'}>
      <div className='flex flex-col relative'>
        <StaticImage
          className='w-full max-h-60 md:max-h-80'
          alt=""
          src="../../static/images/Me.jpg"
          object-position="50% 10%"
        />
        <h1 className='absolute bottom-0 inset-x-0 flex px-3 justify-center md:justify-start bg-gradient-to-t from-zinc-900'>
          The Wanderers Nook
        </h1>
      </div>

      <Padding>
        <div className='w-full pt-4'>
          <p className='w-full'>Welcome to the Nook! Here you'll find everything I find interesting about the outdoors!</p>
          <p className="w-full">What started out as a hiking blog has slowly evolved over the years to a blog about basically anything I find interesting. So it may seem a bit of an odd mix of ideas. Fortunately, it's only me, and I need not concern myself 'Brand Recognition', 'disruptive synergy', 'value added engagementism' or any other such nonsense.</p>
          <p className='w-full'>Enjoy reading the eclectic interests of an amateur arborist, and a professional antic.</p>
        </div>

        <div className='w-full pt-4'>
          <h2 className=''>Hikes</h2>
          <p className='w-full'>Are you a veteran hiker looking for new places to wander? A new hiker, who's always wanted to go outside more but never quite knew where to go? You'll find a walk to suit you here.</p>
          <p className='w-full'>All my walks are accessible by public transport, with some starting in the city centre. Travel details are included in all my walks.</p>
          <p className='w-full'>You can view all my walks, and locations to check out, through the button.</p>
          <div className='flex flex-wrap justify-around md:justify-start md:flex-row-reverse py-4'>
            <ExternalSearchButton linkTo="https://walks.wanderersnook.co.uk" text="Explore hikes" />
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
  />
