import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../scss/global.scss'
import '../scss/nav-main.scss'

function NavMain () {
  const { pathname } = useLocation()
  const navContent = pathname === '/' 
    ? (
      <ul className='nav-main__list'>
        <li className={pathname==='/' ? 'nav-main__item' : 'nav-main__item nav-main__item--inner'}>
          <NavLink to='/female'>
            <img src={'/img/female.svg'} className='nav-main__female' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
        <li className={pathname==='/' ? 'nav-main__item' : 'nav-main__item nav-main__item--inner'}>
          <NavLink to='/male'>
            <img src={'/img/male.svg'} className='nav-main__male' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
      </ul>
    )
    : (
      <NavLink to='/profile'>profile</NavLink>
    )
    
  return (
    <nav className='nav-main'>
      { navContent }
    </nav>
  )
}

export default NavMain
