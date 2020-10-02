import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import NavMain from './NavMain'
import Filters from './Filters'
import UserList from './UserList'
import '../scss/page-main.scss'

function MalePage () {
  const { path } = useRouteMatch()

  return (
    <section className='page-main'>
      <NavMain />
      <h2>Male</h2>
      <div className='page-main__wrapper'>
        <Filters />
        <UserList path={ path }/>
      </div>
    </section>
  )
};

export default MalePage
