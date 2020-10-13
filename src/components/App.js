import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom' 

import Header from '../components/header/Header'
import EditProfile from '../components/edit-profile/EditProfile'
import MainPage from '../components/main-page/MainPage'
import UserPage from '../components/user-page/UserPage'

import '../styles-global/site-wrapper.scss'

function App() {
const { pathname } = useLocation()

  return (
    <div className={pathname === '/' ? 'site-wrapper' : 'site-wrapper site-wrapper--inner'}>
      <Switch>
        <Route exact path='/' component={Header}/>
        <Route path='/female' component={MainPage}/>
        <Route path='/male' component={MainPage}/>
        <Route path='/user/:id' component={UserPage}/>
        <Route path='/edit' component={EditProfile}/>
      </Switch>
    </div>
  );
}

export default App;
