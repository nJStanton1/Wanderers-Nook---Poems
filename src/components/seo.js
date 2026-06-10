import * as React from 'react'
import * as PropTypes from 'prop-types'
import { useSiteMetadataHook } from './graphql-static-hooks/useSiteMetadataHook'

const Seo = ({ pageTitle, pageDescription, pageURL, pageImage }) => {
  const siteMetadata = useSiteMetadataHook()

  const metaTitle = pageTitle ? `${pageTitle} | ${siteMetadata.title}` : `${siteMetadata.title}`
  const metaDescription = pageDescription ? `${pageDescription}` : `${siteMetadata.description}`
  const metaImageAbsoluteURL = pageImage ? `${siteMetadata.siteUrl}/${pageImage}` : `${siteMetadata.siteUrl}/${siteMetadata.image}`
  let metaPageUrl = null
  if (pageURL === "/") {
    metaPageUrl = `${siteMetadata.siteUrl}`
  } else {
    metaPageUrl = pageURL ? `${siteMetadata.siteUrl}${pageURL}/` : ``
  }

  return (
    <>
      {/* General tags for all */}
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteMetadata.author}/>
      <meta httpEquiv="Content-Language" content="en"/> 
      <meta name="google" content={siteMetadata.siteSearch}/>

      {/* Page specidic tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {/* Canonical link is just the page's URL. Must be injected on page creation */}
      {metaPageUrl && <link rel="canonical" href={metaPageUrl} />}    

      {/* Open Graph Tags */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImageAbsoluteURL && <meta property="og:image" content={metaImageAbsoluteURL} />}
      {metaPageUrl && <meta property="og:url" content={metaPageUrl} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle}/>
      <meta name="twitter:description" content={metaDescription}/>
      {metaImageAbsoluteURL && <meta name="twitter:image" content={metaImageAbsoluteURL}/>}
    </>
  )
}

Seo.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  pageURL: PropTypes.string,
}

export default Seo