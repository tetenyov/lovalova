import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Entry from './Entry'
import Female from './Female'
import Male from './Male'
import femaleIcon from '../img/female.svg'
import maleIcon from '../img/male.svg'
import '../scss/global.scss'
import '../scss/site-wrapper.scss'
import '../scss/entry-list.scss'

function App() {
  return (
    <div className="site-wrapper">
      <h1 className="site-wrapper__site-header">LovaLova</h1>
       <Entry>
         <ul className='entry-list'>
           <li>
             <NavLink to='/female'>
               <img src={femaleIcon} className='entry-list__female' width={`300px`} height={`300px`}/>
             </NavLink>
           </li>
           <li>
             <NavLink to='/male'>
               <img src={ maleIcon } className='entry-list__male' width={`300px`} height={`300px`}/>
              </NavLink>
           </li>
         </ul>
       </Entry>
       <Route path='/female' component={ Female }/>
       <Route path='/male' component={ Male }/>
    </div>
  );
}

export default App;
