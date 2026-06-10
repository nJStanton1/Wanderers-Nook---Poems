import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const ExternalNavbarLink = ({ title, to}) => (
  <a 
    className="font-sans w-full lg:w-auto text-lg lg:text-xl text-center my-1 lg:my-0 lg:mx-2 lg:px-2 flex-shrink-0 flex-grow-0 border-b-2 hover:font-medium hover:bg-gray-600/15 transition duration:300"
    href={to}>
      {title}
  </a>
)
const NavbarLink = ({ title, to }) => (
    <Link
      className="font-sans w-full lg:w-auto text-lg lg:text-xl text-center my-1 lg:my-0 lg:mx-2 lg:px-2 flex-shrink-0 flex-grow-0 border-b-2 hover:font-medium hover:bg-gray-600/15 transition duration:300"
      to={to}
    >
      {title}
    </Link>
)

NavbarLink.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}

const NavbarToggle = ({ isOpen, callback }) => (
    <button
        className="flex-shrink-0 flex-grow-0 mr-4 p-2 text-gray-200 lg:hidden"
        onClick={callback}
    >
        <div className={`${isOpen ? "hidden" : "block"}`}>Menu</div>
        <div className={`${isOpen ? "block" : "hidden"}`}>Close</div>
    </button>
)
  
NavbarToggle.propTypes = {
    callback: PropTypes.func.isRequired,
}

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          menuOpen: false,
          menuOpenClassName: 'hidden lg:flex',
        }
    }    

    toggle = () => {
      this.setState(
        {
          menuOpen: !this.state.menuOpen,
        },
        () => {
          this.setState({
            menuOpenClassName: this.state.menuOpen ? 'flex flex-grow w-screen' : 'hidden lg:flex',
          })
        }
      )
    }

    render() {

        return (
        <div className="self-start lg:self-end">
            <nav
            className="flex flex-wrap lg:max-w-6xl flex-shrink-0 flex-grow text-white mx-auto items-end justify-between"
            role="navigation"
            aria-label="main-navigation"
            >
                <StaticImage 
                  className='max-w-8 ml-4 md:ml-1 md:max-w-none max-h-12 md:max-h-24 m-1'
                  objectFit='contain'
                  alt=""
                  src="../../static/logos/Logo.svg">
                </StaticImage>
                <div className="flex flex-grow justify-end">
                    <NavbarToggle isOpen={this.state.menuOpen} callback={this.toggle} />
                </div>
                <div className={'flex-shrink-0 mb-1 lg:py-2 mr-0 md:mr-3 lg:w-auto flex-wrap items-center ' + this.state.menuOpenClassName}>
                    <NavbarLink to={'/'} title={'Home'} />
                    <NavbarLink to={'/poems'} title={'Poems'} />
                    <NavbarLink to={'/'} title={'Photos'} />
                    <NavbarLink to={'/'} title={'About Me'} />
                </div>
                
            </nav>
        </div>
        )
    }
}