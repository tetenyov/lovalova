import React from 'react'
import { connect } from 'react-redux' 
import { NavLink, useRouteMatch } from 'react-router-dom'
import UserInfo from './UserInfo'
import NavMain from './NavMain'
import PersonalMessages from './PersonalMessages'
import ButtonLike from './ButtonLike'
import '../scss/user-page.scss'

function UserPage (props) {
  const { id: userId } = useRouteMatch().params
  const user = props.users.find(user => user.id === userId)

  return (
    <section className='user-page'>
      <NavMain />
      <NavLink to='/female'>all ladies</NavLink>
      <img src={user.photo} className='user-list__image'/>
      <h3>{ user.name }</h3>
      <UserInfo user={user}/>
      <ButtonLike />
      <PersonalMessages />
    </section>
    
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
};

export default connect(mapStateToProps)(UserPage);