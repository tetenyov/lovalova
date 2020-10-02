import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import NavMain from './NavMain'
import Female from './Female'
import Male from './Male'


import '../scss/site-wrapper.scss'

function App() {
  return (
    <div className="site-wrapper">
      <Route exact path='/' component={ NavMain }/>
      <Route path='/female' component={ Female }/>
      <Route path='/male' component={ Male }/>
    </div>
  );
}

export default App;
