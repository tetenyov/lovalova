import React from 'react';
import { useLocation } from 'react-router-dom';

import NavEnterPage from './NavEnterPage';
import NavInnerPage from './NavInnerPage';

import './styles/nav-main.scss';

export default function NavMain () {
  const { pathname } = useLocation();
    
  return (
    <nav className='nav-main'>
      { pathname === '/' 
          ? <NavEnterPage pathname={pathname}/>
          : <NavInnerPage />
      }
    </nav>
  );
};
