import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { TUserList } from '../../types/components';

import Spinner from '../common/Spinner';

import './user-list.scss';

export default function UserList({ filteredUsers }: TUserList) {
  const [ isLoading, setIsLoading ] = useState(true);

  const handleImageLoad = () => setIsLoading(false);

  const userList = filteredUsers.map(user => {
    return (
      <li className='user-list__item' key={user.id}>
        { isLoading && <Spinner />}
        <h3 className={user.gender === 'female' ? 'user-list__heading' : 'user-list__heading user-list__heading--male'}>
          { user.name }
        </h3>
        <NavLink to={`/user/${user.id}`}>
          <img 
            src={user.photo} 
            className='user-list__image' 
            onLoad={handleImageLoad}
            alt={`A ${user.gender} user`}
          />
        </NavLink>
        
      </li>
    );
  });
 
  return (
    <ul className='user-list'>
      { userList }
    </ul>
  );
};
