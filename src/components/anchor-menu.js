import React from 'react'
import { Link } from 'gatsby'

export const AnchorButton = ({text, link}) => (
    <Link to={link} className={`flex grow px-3 py-1 justify-center text-white font-medium text-base md:text-lg rounded-full bg-slate-800/10 border-2 accent-border hover:text-white hover:accent-border-dark hover:accent-dark-background`}>
        {text}
    </Link>
)

export const AnchorMenu = ({children}) => (
    <div className='flex flex-wrap flex-row p-5 gap-5 justify-center w-full'>
        {children}
    </div>
)