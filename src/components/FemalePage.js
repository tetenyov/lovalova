import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import Header from './Header'
import PageHeading from './PageHeading'
import Filters from './Filters'
import UserList from './UserList'
import '../scss/page-main.scss'

function FemalePage () {
  const { path } = useRouteMatch()
      
  console.log(path)
  return (
    <section className='page-main'>
      <Header />
      <PageHeading>
        <h2 className='page-main__header'>Beautiful ladies</h2>
        <p className='page-main__text'>Click on a photo to visit profile</p>
      </PageHeading>
      <div className='page-main__wrapper'>
        <Filters />
        <UserList path={ path }/>
      </div>
    </section>
    
  )
}

export default FemalePage
