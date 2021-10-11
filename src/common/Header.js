import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import tw from 'tailwind-styled-components'

import DarkModeSwitcher from './DarkModeSwitcher'
import logo from '../assets/images/upbge.svg'

const Nav = tw.nav`flex justify-end space-x-4 text-sm font-semibold md:visible`
const Brand = tw.div`text-white text-3xl md:text-4xl font-black font-display`

const MenuItem = ({ children, to, exact, ...rest }) => {
  return (
    <NavLink
      to={to}
      className={'text-white'}
      activeClassName={'text-upbge'}
      exact={exact}
      {...rest}>
      {children}
    </NavLink>
  )
}

MenuItem.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

const Header = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)

  const isHome = useLocation().pathname === '/'

  useEffect(() => {
    const handler = () => setCollapsed(window.pageYOffset > 0)

    addEventListener('scroll', handler)

    return () => removeEventListener('scroll', handler)
  })

  const onMenuClick = useCallback(
    () => setMenuVisible(!menuVisible),
    [menuVisible]
  )

  return (
    <div
      className={`sticky top-0 z-50 p-2 h-18 px-4 md:px-20 flex items-center justify-between 
        transition-height duration-300 ease-in-out  
            ${
              collapsed || !isHome
                ? 'bg-gray-950'
                : 'bg-transparent md:h-32 2xl:px-48'
            }`}>
      <div className={'flex items-center'}>
        <NavLink to={'/'} className={'mr-1 md:mr-3'}>
          <img src={logo} alt={'UPBGE Logo'} className={'h-10 md:h-12'} />
        </NavLink>

        <Brand>UPBGE</Brand>
      </div>

      <div
        className={
          'md:hidden text-white cursor-pointer flex items-center space-x-4'
        }>
        <DarkModeSwitcher />

        <MenuIcon
          className={menuVisible ? 'hidden' : 'h-10'}
          onClick={onMenuClick}
        />
        <XIcon
          className={menuVisible ? 'h-10' : 'hidden'}
          onClick={onMenuClick}
        />
      </div>

      <div
        className={`absolute top-14 left-0 w-screen bg-gray-950 overflow-hidden 
                text-2xl shadow-lg transition-height duration-300 ease-in-out  
                ${menuVisible ? 'h-60' : 'h-0'}`}
        onClick={onMenuClick}>
        <div className={'flex flex-col space-y-4 m-6'}>
          <MenuItem to='/' exact={true}>
            Home
          </MenuItem>
          <MenuItem to='/documentation'>Documentation</MenuItem>
          <MenuItem to='/community'>Community</MenuItem>
          <MenuItem to='/releases'>Releases</MenuItem>
        </div>
      </div>

      <Nav className={'hidden md:flex items-center'}>
        <MenuItem to='/' exact={true}>
          Home
        </MenuItem>
        <MenuItem to='/documentation'>Documentation</MenuItem>
        <MenuItem to='/community'>Community</MenuItem>
        <MenuItem to='/releases'>Releases</MenuItem>

        <DarkModeSwitcher />
      </Nav>
    </div>
  )
}

export default Header