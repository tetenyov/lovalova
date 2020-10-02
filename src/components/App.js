import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavMain from './NavMain'
import FemalePage from './FemalePage'
import MalePage from './MalePage'
import UserPage from './UserPage'


import '../scss/site-wrapper.scss'

function App() {
  return (
    <div className="site-wrapper">
      <Switch>
        <Route exact path='/' component={ NavMain }/>
        <Route path='/female' component={ FemalePage }/>
        <Route path='/male' component={ MalePage }/>
        <Route path='/user/:id' component={ UserPage }/>
      </Switch>
    </div>
  );
}

export default App;
