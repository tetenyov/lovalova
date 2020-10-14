import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import Spinner from '../common/Spinner'

import './styles/user-list.scss'

class UserList extends Component {
  state = {
    isLoading: true
  }

  imageLoadHandler = () => {
    this.setState({
      isLoading: false
    })
  }

  render() {
    const { filteredUsers } = this.props
    const userList = filteredUsers.map(user => {
      return (
        <li className='user-list__item' key={user.id}>
          { this.state.isLoading && <Spinner />}
          <h3 className={user.gender === 'female' ? 'user-list__heading' : 'user-list__heading user-list__heading--male'}>
            { user.name }
          </h3>
          <NavLink to={`/user/${user.id}`}>
            <img src={user.photo} className='user-list__image' onLoad={this.imageLoadHandler}/>
          </NavLink>
          
        </li>
      )
    })

    return (
      <ul className='user-list'>
        { userList }
      </ul>
    )
  }
};

UserList.propTypes = {
  filteredUsers: PropTypes.array
}

export default UserList;
