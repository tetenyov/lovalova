import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '../../types/root-state';
import { TUserPageId, TUserPageUsers } from '../../types/components';

import UserInfo from '../common/UserInfo';
import Header from '../header/Header';
import ButtonLike from '../common/ButtonLike';
import PersonalMessages from './PersonalMessages';

import './styles/user-page.scss';

export default function UserPage () {
  const { id: userId }: TUserPageId = useParams();
  
  const { users }: TUserPageUsers = useSelector((state: RootState) => state.users);
  const user = users.find(user => user.id === userId); 

  return (
    <section className='user-page'>
      <Header />
      <div className='user-page__container'>
        <div className='user-page__wrapper user-page__wrapper--image'>
          <img 
            src={user?.photo} 
            className='user-page__image'
            alt={`User id ${userId}`}
          />
          <div className='user-page__interactions'>
            <PersonalMessages />
            <ButtonLike />
          </div>
        </div>
        <div className='user-page__wrapper user-page__wrapper--info'>
          <h3 className='user-page__user-name'>{ user?.name }</h3>
          { user && <UserInfo user={user} /> }
        </div>
      </div>
    </section>
    
  );
};
