import React from 'react'
import { connect } from 'react-redux' 
import { useRouteMatch } from 'react-router-dom'
import UserInfo from './UserInfo'
import '../scss/page-main.scss'

function UserPage (props) {
  const { id: userId } = useRouteMatch().params
  const user = props.users.find(user => user.id === userId)

  return (
    <section className='user-page'>
      <h3>{ user.name }</h3>
      <img src={user.photo} className='user-list__image'/>
      <UserInfo user={user}/>
    </section>
    
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

export default connect(mapStateToProps)(UserPage);