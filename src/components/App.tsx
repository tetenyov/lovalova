import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'; 

import Header from './header/Header';
import EditProfile from './edit-profile/EditProfile';
import MainPage from './main-page/MainPage';
import UserPage from './user-page/UserPage';

import '../styles-global/site-wrapper.scss';

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className={pathname === '/' ? 'site-wrapper' : 'site-wrapper site-wrapper--inner'}>
      <Switch>
        <Route exact path='/' component={Header}/>
        <Route path={['/female', '/male']} component={MainPage}/>
        <Route path='/user/:id' component={UserPage}/>
        <Route path='/edit' component={EditProfile}/>
      </Switch>
    </div>
  );
};
