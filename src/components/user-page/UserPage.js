import React from 'react'
import { connect } from 'react-redux' 
import { useRouteMatch } from 'react-router-dom'
import UserInfo from '../generic/UserInfo'
import Header from '../header/Header'
import ButtonLike from '../generic/ButtonLike'
import PersonalMessages from './PersonalMessages'
import './styles/user-page.scss'

function UserPage (props) {
  const { id: userId } = useRouteMatch().params;
  const user = props.users.find(user => user.id === userId);
  return (
    <section className='user-page'>
      <Header />
      <div className='user-page__wrapper'>
        <div className='user-page__wrapper user-page__wrapper--image'>
          <img src={user.photo} className='user-page__image'/>
          <div className='user-page__wrapper user-page__wrapper--interactions'>
            <PersonalMessages />
            <ButtonLike />
          </div>
        </div>
        <div className='user-page__wrapper user-page__wrapper--info'>
          <h3 className='user-page__user-name'>{ user.name }</h3>
          <UserInfo user={user}/>
        </div>
      </div>
    </section>
    
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
};

export default connect(mapStateToProps)(UserPage);