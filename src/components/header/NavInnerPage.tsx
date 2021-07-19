import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavInnerPage() {
  return (
    <ul className='nav-main__list'>
      <li>
        <NavLink 
          to='/edit' 
          className='nav-main__link nav-main__link--profile' 
          activeClassName='nav-main__link--current'
        >
          Create profile
        </NavLink>
      </li>
    </ul>
  );
};
