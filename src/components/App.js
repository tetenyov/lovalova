import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Header from './Header'
import FemalePage from './FemalePage'
import MalePage from './MalePage'
import UserPage from './UserPage'
import Profile from './Profile'


import '../scss/site-wrapper.scss'

function App() {
const { pathname } = useLocation()

  return (
    <div className={pathname==='/' ? 'site-wrapper' : 'site-wrapper site-wrapper--inner'}>
      <Switch>
        <Route exact path='/' component={ Header }/>
        <Route path='/female' component={ FemalePage }/>
        <Route path='/male' component={ MalePage }/>
        <Route path='/user/:id' component={ UserPage }/>
        <Route path='/profile' component={ Profile }/>
      </Switch>
    </div>
  );
}

export default App;
