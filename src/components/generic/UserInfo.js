import React from 'react'
import './styles/user-info.scss'

function UserInfo (props) {
  const { user } = props
  return (
    <table className='user-page__user-info'>
      <thead>
        <tr>
          <th>Age</th>
          <th>Hair</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ user.age }</td>
          <td>{ user.hairColor }</td>
          <td>{ user.height }</td>
        </tr>
      </tbody>
    </table>
  )
}

export default UserInfo
