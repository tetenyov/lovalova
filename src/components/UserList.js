import React from 'react'
import { connect } from 'react-redux'  
import { NavLink } from 'react-router-dom'
//import UserInfo from './UserInfo'
import '../scss/user-list.scss'

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

const mapStateToProps = (state, ownProps) => {
  const { path } = ownProps
  const { users, age, hairColors, heights } = state.users
  const isColor = (allColors, color) => {
    return allColors.length ? allColors.find(el => el.includes(color)) : true
  }
  const isHeight = (allHeights, height) => {
    return allHeights.length ? allHeights.find(el => el.includes(height)) : true
  }
  const filteredUsers = users.filter(user => path.slice(1) === user.gender 
    && (user.age >= age.from || age.from === '')
    && (user.age <= age.to || age.to === '')
    && isColor(hairColors, user.hairColor)
    && isHeight(heights, user.height))

  return {
    filteredUsers
  }
};

export default connect(mapStateToProps)(UserList);
