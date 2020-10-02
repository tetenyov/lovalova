import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import femaleIcon from '../img/female.svg'
import maleIcon from '../img/male.svg'
import '../scss/global.scss'
import '../scss/nav-main.scss'

export default function () {
  const { pathname } = useLocation()

  return (
    <nav className={pathname==='/' ? 'nav-main' : 'nav-main nav-main--inner'}>
      <h1 className={pathname==='/' ? 'nav-main__logo' : 'nav-main__logo nav-main__logo--inner'}>
        LovaLova
      </h1>
      <ul className='nav-main__list'>
        <li className={pathname==='/' ? 'nav-main__item' : 'nav-main__item nav-main__item--inner'}>
          <NavLink to='/female'>
            <img src={femaleIcon} className='nav-main__female' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
        <li className={pathname==='/' ? 'nav-main__item' : 'nav-main__item nav-main__item--inner'}>
          <NavLink to='/male'>
            <img src={maleIcon} className='nav-main__male' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
