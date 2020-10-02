import React from 'react'
import { connect } from 'react-redux' 
import { useRouteMatch } from 'react-router-dom'
import '../scss/page-main.scss'

function UserPage (props) {
  const {id: userId} = useRouteMatch().params
  const user = props.users.find(user => user.id === userId)

  return (
    <section className='user-page'>
      <h2>{user.gender}</h2>
    </section>
    
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

export default connect(mapStateToProps)(UserPage);