import React from 'react'
import { connect } from 'react-redux' 
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

import NavMain from './NavMain'

import './styles/page-header.scss'

function Header(props) {
  const { pathname } = useLocation()
  const gender  = props.gender || localStorage.getItem('gender')

  return (
    <header className={pathname === '/' ? 'page-header' : 'page-header page-header--inner'}>
      { pathname === '/'
          ? <h1 className={pathname === '/' ? 'page-header__logo' : 'page-header__logo page-header__logo--inner'}>
              LovaLova
            </h1> 
          : <NavLink to={`${gender}`}>
              <h1 className={pathname === '/' ? 'page-header__logo' : 'page-header__logo page-header__logo--inner'}>
                LovaLova
              </h1>
            </NavLink>
      }
      <p className={pathname === '/' ? 'page-header__slogan' : 'page-header__slogan page-header__slogan--inner'}>
        Find your love and be happy!
      </p>
      <p className={pathname === '/' ? 'page-header__text' : 'page-header__text page-header__text--inner'}>
        Whom are you looking for?
      </p>
      <NavMain />
    </header>
  )
}

Header.propTypes = {
  gender: PropTypes.string,
}

export default connect(state => ({
  gender: state.users.userGenderInterest
}))(Header)
