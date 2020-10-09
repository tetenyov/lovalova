import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/user-list.scss'

function UserList (props) {
  const { filteredUsers } = props
  const userList = filteredUsers.map(user => {
    return (
      <li className='user-list__item' key={user.id}>
        <h3 className={user.gender==='female' ? 'user-list__heading' : 'user-list__heading user-list__heading--male'}>
          { user.name }
        </h3>
        <NavLink to={`/user/${user.id}`}>
          <img src={user.photo} className='user-list__image'/>
        </NavLink>
      </li>
    )
  })

  return (
    <ul className='user-list'>
      { userList }
    </ul>
    
  )
};

export default UserList;
