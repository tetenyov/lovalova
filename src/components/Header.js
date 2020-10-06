import React from 'react'
import { useLocation } from 'react-router-dom'
import NavMain from './NavMain'
import '../scss/page-header.scss'

function Header() {
  const { pathname } = useLocation()

  return (
    <header className={pathname==='/' ? 'page-header' : 'page-header page-header--inner'}>
      <h1 className={pathname==='/' ? 'page-header__logo' : 'page-header__logo page-header__logo--inner'}>
        LovaLova
      </h1>
      <p className={pathname==='/' ? 'page-header__slogan' : 'page-header__slogan page-header__slogan--inner'}>
        Find your love and be happy!
      </p>
      <NavMain />
    </header>
  )
}

export default Header
