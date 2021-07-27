import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { TNavEnterPage } from '../../types/props';

import { chooseGender } from '../../store/action-creators';

export default function NavEnterPage({ pathname }: TNavEnterPage) {
  const dispatch = useDispatch();

  const linkClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const gender = event.currentTarget.href.includes('female') 
      ? 'female' 
      : 'male';

    localStorage.setItem('gender', gender);

    dispatch(chooseGender(gender));
  };

  return (
    <ul className='nav-main__list'>
      <li>
        <NavLink 
          to='/female' 
          className={pathname === '/' ? 'nav-main__link' : 'nav-main__link nav-main__item--link'} 
          onClick={linkClickHandler}
        >
          <img 
            src={'/img/female.svg'} 
            className='nav-main__female' 
            width={`300px`} 
            height={`300px`}
            alt='female symbol'
          />
        </NavLink>
      </li>
      <li>
        <NavLink 
          to='/male' 
          className={pathname === '/' ? 'nav-main__link' : 'nav-main__link nav-main__link--inner'} 
          onClick={linkClickHandler}
        >
          <img 
            src={'/img/male.svg'} 
            className='nav-main__male' 
            width={`300px`} 
            height={`300px`}
            alt='male symbol'
          />
        </NavLink>
      </li>
    </ul>
  );
};
