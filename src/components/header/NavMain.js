import React from 'react'
import { connect } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

import { chooseGender } from '../../action-creators/action-creators'

import './styles/nav-main.scss'

function NavMain (props) {
  const { pathname } = useLocation()
  const { chooseGender } = props

  const linkClickHandler = (evt) => {
    const gender = evt.currentTarget.href.includes('female') ? 'female' : 'male'
    localStorage.setItem('gender', gender)
    chooseGender(gender)
  }

  const getNavEnterPage = () => {
    return (
      <ul className='nav-main__list'>
        <li className={pathname === '/' ? 'nav-main__item' : 'nav-main__item nav-main__item--inner'}>
          <NavLink to='/female' onClick={linkClickHandler}>
            <img src={'/img/female.svg'} className='nav-main__female' value='female' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
        <li className={pathname === '/' ? 'nav-main__item' : 'nav-main__item nav-main__item--inner'}>
          <NavLink to='/male' value='male' onClick={linkClickHandler}>
            <img src={'/img/male.svg'} className='nav-main__male' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
      </ul>
    )
  }
  
  const getNavInnerPage = () => {
    return (
      <NavLink to='/edit' className=''>
      <ul className='nav-main__list'>
        <li className='nav-main__item nav-main__item--profile'>Create profile</li>
      </ul>
    </NavLink>
    )
  }

  const navContent = pathname === '/' ? getNavEnterPage() : getNavInnerPage()
    
  return (
    <nav className='nav-main'>
      { navContent }
    </nav>
  )
}

export default connect(null, { chooseGender })(NavMain)
