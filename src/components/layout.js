// Imports
import * as React from 'react'
import Navbar from './navbar'

// Define components
export const Layout = ({ children, subdomain }) => {

  // Map subdomains to body classes
  const subdomainMap = {
    hub: 'hub',
    walks: 'walks',
    trees: 'trees',
    // Add more subdomains here in the future
  };

  // Determine body class with fallback
  const bodyClass = subdomainMap[subdomain] || 'hub';


  //Return final layout here
  return (
    <body className={bodyClass}>
      <div className="flex flex-col items-center pb-52 w-full min-h-screen bg-brand">
        <div className='w-full items-center bg-brand-deco-1 border-b-4 accent-border'>
          <Navbar />
        </div>
        
        <main className='w-screen max-w-4xl'>
          {children}
        </main>
      </div>
    </body>
    
  )
}

export const Padding = ({ children }) => {
  return(
    <div className='w-full px-3 md:px-5 lg:px-3'>
      {children}
    </div>
  )
}