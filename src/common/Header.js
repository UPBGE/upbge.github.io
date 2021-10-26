import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MenuIcon } from '@heroicons/react/solid'
import tw from 'tailwind-styled-components'

import DarkModeSwitcher from './DarkModeSwitcher'
import logo from '../assets/images/upbge.svg'
import Dropdown from './Dropdown'
import MenuItem from './MenuItem'

const Nav = tw.nav`flex justify-end space-x-4 text-sm font-semibold md:visible`
const Brand = tw.div`text-white text-3xl md:text-4xl font-black font-display`

const HeaderMenu = tw(MenuItem)`text-white`

const scrollToTop = () => window.scrollTo(0, 0)

const Header = () => {
  const [collapsed, setCollapsed] = useState(false)

  const isHome = useLocation().pathname === '/'

  useEffect(() => {
    const handler = () => setCollapsed(window.pageYOffset > 0)

    addEventListener('scroll', handler)

    return () => removeEventListener('scroll', handler)
  })

  return (
    <div
      className={`sticky top-0 z-50 p-2 h-18 px-4 md:px-20 flex items-center justify-between 
        transition-height duration-300 ease-in-out  
            ${
              collapsed || !isHome
                ? 'bg-gray-950'
                : 'bg-transparent md:h-32 2xl:px-48'
            }`}>
      <NavLink
        to={'/'}
        className={'flex items-center space-x-1 md:space-x-2'}
        onClick={scrollToTop}>
        <img src={logo} alt={'UPBGE Logo'} className={'h-10 md:h-12'} />

        <Brand>UPBGE</Brand>
      </NavLink>

      <div className={'md:hidden cursor-pointer flex items-center space-x-4'}>
        <DarkModeSwitcher className={'text-white'} />

        <Dropdown label={<MenuIcon className={'h-10 text-white'} />}>
          <MenuItem to='/' exact={true}>
            Home
          </MenuItem>
          <MenuItem to='/documentation'>Documentation</MenuItem>
          <MenuItem to='/community'>Community</MenuItem>
          <MenuItem to='/download'>Download</MenuItem>
        </Dropdown>
      </div>

      <Nav className={'hidden md:flex items-center'}>
        <HeaderMenu to='/' exact={true}>
          Home
        </HeaderMenu>
        <HeaderMenu to='/documentation'>Documentation</HeaderMenu>
        <HeaderMenu to='/community'>Community</HeaderMenu>
        <HeaderMenu to='/download'>Download</HeaderMenu>

        <DarkModeSwitcher />
      </Nav>
    </div>
  )
}

export default Header
