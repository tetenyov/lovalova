import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { RootState } from '../types/root-state';

import NavMain from './NavMain'

import './styles/page-header.scss'

export default function Header() {
  const { pathname } = useLocation();

  const { userGenderInterest: gender } = useSelector((state: RootState) => state.users) 
    || localStorage.getItem('gender');

  const getClassName = (path: string, className: string) => {
     return path === '/'
       ? className
       : `${className} ${className}--inner`;
  };

  return (
    <header className={getClassName(pathname, 'page-header')}>
      { pathname === '/'
          ? <h1 className={getClassName(pathname, 'page-header__logo')}>
              LovaLova
            </h1> 
          : <NavLink to={`${gender}`}>
              <h1 className={getClassName(pathname, 'page-header__logo')}>
                LovaLova
              </h1>
            </NavLink>
      }
      <p className={getClassName(pathname, 'page-header__slogan')}>
        Find your love and be happy!
      </p>
      <p className={getClassName(pathname, 'page-header__text')}>
        Whom are you looking for?
      </p>
      <NavMain />
    </header>
  );
};
