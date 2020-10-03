import React from 'react'
import { connect } from 'react-redux'  
import { NavLink } from 'react-router-dom'
import UserInfo from './UserInfo'
import '../scss/user-list.scss'

function UserList (props) {
  const { filteredUsers } = props
  const userList = filteredUsers.map(user => {
    return (
      <li className='user-list__item' key={user.id}>
        <h3>{ user.name }</h3>
        <NavLink to={`/user/${user.id}`}>
          <img src={user.photo} className='user-list__image'/>
        </NavLink>
        <UserInfo user={user}/>
      </li>
    )
  })

  return (
    <ul className='user-list'>
      { userList }
    </ul>
    
  )
};

const mapStateToProps = (state, ownProps) => {
  const { path } = ownProps
  const pathCompare = path.slice(1)
  const { users } = state

  return {
    filteredUsers: users.filter(user => pathCompare === user.gender)
  }
};

export default connect(mapStateToProps)(UserList);
