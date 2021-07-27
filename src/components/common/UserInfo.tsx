import React from 'react';

import { TUserInfo } from '../../types/props';

import './styles/user-info.scss';

export default function UserInfo ({ user }: TUserInfo) {

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
  );
};
