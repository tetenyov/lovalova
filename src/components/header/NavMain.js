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
        <li>
          <NavLink to='/female' className={pathname === '/' ? 'nav-main__link' : 'nav-main__link nav-main__item--link'} 
            onClick={linkClickHandler}
          >
            <img src={'/img/female.svg'} className='nav-main__female' value='female' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
        <li>
          <NavLink to='/male' className={pathname === '/' ? 'nav-main__link' : 'nav-main__link nav-main__link--inner'} 
            onClick={linkClickHandler}
          >
            <img src={'/img/male.svg'} className='nav-main__male' width={`300px`} height={`300px`}/>
          </NavLink>
        </li>
      </ul>
    )
  }
  
  const getNavInnerPage = () => {
    return (
      <ul className='nav-main__list'>
        <li>
          <NavLink to='/edit' className='nav-main__link nav-main__link--profile' 
            activeClassName='nav-main__link--current'
          >
            Create profile
          </NavLink>
        </li>
      </ul>
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
