import React from 'react'

function UserInfo (props) {
  const { user } = props
  return (
    <table>
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
