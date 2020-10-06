import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Header from './Header'
import Filters from './Filters'
import UserList from './UserList'
import '../scss/page-main.scss'

function FemalePage () {
  const { path } = useRouteMatch()
      
  console.log('----female')
  return (
    <section className='page-main'>
      <Header />
      <h2>Female</h2>
      <div className='page-main__wrapper'>
        <Filters />
        <UserList path={ path }/>
      </div>
    </section>
    
  )
}

export default FemalePage
