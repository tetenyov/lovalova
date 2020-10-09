import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import index from '../pages/index'
import female from '../pages/female'
import male from '../pages/male'
import edit from '../pages/edit'
import userId from '../pages/user-id'
import '../styles-global/site-wrapper.scss'

function App() {
const { pathname } = useLocation()

  return (
    <div className={pathname==='/' ? 'site-wrapper' : 'site-wrapper site-wrapper--inner'}>
      <Switch>
        <Route exact path='/' component={index}/>
        <Route path='/female' component={female}/>
        <Route path='/male' component={male}/>
        <Route path='/user/:id' component={userId}/>
        <Route path='/edit' component={edit}/>
      </Switch>
    </div>
  );
}

export default App;
