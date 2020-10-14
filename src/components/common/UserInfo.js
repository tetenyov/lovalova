import React from 'react'
import PropTypes from 'prop-types'

import './styles/user-info.scss'

function UserInfo (props) {
  const { user } = props
  const classNameColor = user.gender === 'female' 
    ? 'user-info__data user-info__data--female' 
    : 'user-info__data'

  return (
    <table className='user-info'>
      <thead>
        <tr>
          <th>Age</th>
          <th>Hair</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={classNameColor}>{ user.age }</td>
          <td className={classNameColor}>{ user.hairColor }</td>
          <td className={classNameColor}>{ user.height }</td>
        </tr>
      </tbody>
    </table>
  )
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    gender: PropTypes.string,
    age: PropTypes.number,
    hairColor: PropTypes.string,
    height: PropTypes.string
  })
}

export default UserInfo
