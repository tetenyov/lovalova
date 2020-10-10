import React from 'react'
import { connect } from 'react-redux' 
import { NavLink, useLocation } from 'react-router-dom'
import NavMain from './NavMain'
import './styles/page-header.scss'

function Header(props) {
  const { pathname } = useLocation()
  const { gender } = props

  return (
    <header className={pathname==='/' ? 'page-header' : 'page-header page-header--inner'}>
      <NavLink to={`/${gender}`}>
        <h1 className={pathname==='/' ? 'page-header__logo' : 'page-header__logo page-header__logo--inner'}>
          LovaLova
        </h1>
      </NavLink>
      <p className={pathname==='/' ? 'page-header__slogan' : 'page-header__slogan page-header__slogan--inner'}>
        Find your love and be happy!
      </p>
      <p className={pathname==='/' ? 'page-header__text' : 'page-header__text page-header__text--inner'}>
        Who you are looking for?
      </p>
      <NavMain />
    </header>
  )
}

export default connect(state => ({
  gender: state.users.userGenderInterest
}))(Header)
