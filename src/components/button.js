import React from 'react'
import * as PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import {ReactComponent as SearchIcon} from "../../static/icons/search-button-icon.svg"
import {ReactComponent as GoogleMapIcon} from "../../static/icons/google-map-icon.svg"

export const PlaceholderButton = ({ text }) => (
    <div className='font-sans inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full accent-background hover:accent-dark-background'>
        {text}
    </div>
)

PlaceholderButton.propTypes = {
    text: PropTypes.string.isRequired
}

export const InternalButton = ({ text, linkTo }) => (
    <Link to={linkTo} className='font-sans inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full accent-background hover:accent-dark-background'>
        {text}
    </Link>
)

InternalButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const ExternalButton = ({ text, linkTo }) => (
    <a href={linkTo} target="_blank" rel="noreferrer" className='font-sans inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full accent-background hover:accent-dark-background'>
        {text}
    </a>
)

ExternalButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const BackButton = ({ text }) => (
    <button onClick={() => navigate(-1)} className='font-sans inline-block px-3 py-1 m-2 text-base md:text-lg rounded-full accent-background hover:accent-dark-background'>
        {text ? text : 'Go back'}
    </button>
)

BackButton.propTypes = {
    text: PropTypes.string,
}

export const PlaceholderSearchButton = ({ text }) => (
    <div className='font-sans inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full accent-background hover:accent-dark-background'>
        <SearchIcon alt="Search icon" className="size-6"/>
        <span className='pl-1'>{text}</span>
    </div>
)

PlaceholderSearchButton.propTypes = {
    text: PropTypes.string.isRequired
}

export const InternalSearchButton = ({ text, linkTo }) => (
    <Link to={linkTo} className='font-sans inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full accent-background hover:accent-dark-background'>
        <SearchIcon alt="Search icon" className="size-6"/>
        <span className='pl-1'>{text}</span>
    </Link>
)

InternalSearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const ExternalSearchButton = ({ text, linkTo }) => (
    <a href={linkTo} target="_blank" rel="noreferrer" className='font-sans inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full accent-background hover:accent-dark-background'>
        <SearchIcon alt="Search icon" className="size-6"/>
        <span className='pl-1'>{text}</span>
    </a>
)

ExternalSearchButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const PlaceholderMapButton = ({ text }) => (
    <div className='font-sans inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full accent-background hover:accent-dark-background'>
        <GoogleMapIcon alt="Map icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </div>
)

PlaceholderMapButton.propTypes = {
    text: PropTypes.string.isRequired
}

export const InternalMapButton = ({ text, linkTo }) => (
    <Link to={linkTo} className='font-sans inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full accent-background hover:accent-dark-background'>
        <GoogleMapIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </Link>
)

InternalMapButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const ExternalMapButton = ({ text, linkTo }) => (
    <a href={linkTo} target="_blank" rel="noreferrer" className='font-sans inline-flex px-3 py-1 m-2 text-base md:text-lg items-center rounded-full accent-background hover:accent-dark-background'>
        <GoogleMapIcon alt="Search icon" width="24px" height="24px"/>
        <span className='pl-1'>{text}</span>
    </a>
)

ExternalMapButton.propTypes = {
    text: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired
}

export const GoogleDirectionsButton = ({ destinationLatitude, destinationLongitude }) => {
    let googleMapsURL = "https://www.google.com/maps/dir/?api=1"
    // const originLatitude="53.481515300969875"
    // const originLongitude="-2.2370461506010977"
    // Add origin to string
    // googleMapsURL = googleMapsURL + `&origin=${originLatitude}%2C${originLongitude}`
    // Add destination to string
    googleMapsURL = googleMapsURL + `&destination=${destinationLatitude}%2C${destinationLongitude}`
    // Add travel mode
    googleMapsURL = googleMapsURL + "&travelmode=transit"
    return (
        <ExternalMapButton linkTo={googleMapsURL} text='Get directions here' />
    )
}

GoogleDirectionsButton.propTypes = {
    destinationLatitude: PropTypes.number.isRequired,
    destinationLongitude: PropTypes.number.isRequired
}