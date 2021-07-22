import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../header/Header';
import PageHeading from './PageHeading';
import Filters from '../filters/Filters';
import UserListContainer from '../../containers/UserListContainer';

import './styles/page-main.scss';

export default function MainPage () {
  const { pathname } = useLocation();

  const genderRelativeHeading = pathname === '/female' 
    ? 'Beautiful ladies' 
    : 'Wonderful gentlemen';
  
  return (
    <section className='page-main'>
      <Header />
      <PageHeading>
        <h2 className='page-main__header'>
          { genderRelativeHeading }
        </h2>
        <p className='page-main__text'>
          Click on a photo to visit profile
        </p>
      </PageHeading>
      <div className='page-main__wrapper'>
        <Filters />
        <UserListContainer pathname={ pathname }/>
      </div>
    </section>
    
  );
};
