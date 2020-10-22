import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { createProfile } from '../../action-creators/action-creators'
import Header from '../header/Header'
import UploadAvatar from './UploadAvatar'
import EditProfileForm from './EditProfileForm'
import editProfile from '../../utils/editProfile'
import { validateEditProfile } from '../../utils/validateForm'

import './styles/edit-profile.scss'
import './styles/form-profile.scss'

class EditProfile extends Component {
  state = {
    userCreated: false,
    gender: ''
  }

  getProfileGender = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  componentDidUpdate(prevProps) {
     if (this.props.users.length !== prevProps.users.length) {
       this.setState({
         userCreated: true
       })
     }
  }

  render() {
    const isValid = validateEditProfile(this.props.profileData)
    const { getImageSrc } = this.props
    const { userCreated, gender } = this.state

    const getCreationNotice = (isCreated) => {
      return isCreated && (
        <p className='profile__notice'>
          Your profile is  
          <NavLink to={`/${gender}`}>
            <span className='profile__link'> on site!</span>
          </NavLink>
        </p> 
      )
    }

    const getValidationNotice = (isValid) => {
      return (
        <p 
         className={!isValid 
          ? 'form-upload__validation-notice' 
          : 'form-upload__validation-notice form-upload__validation-notice--success'}
        >
          {isValid 
            ? 'Now you can create profile (Create profile button)'
            : 'Please fill all the fields of the form and upload photo'
          }
        </p>
      )
    }

    return (
      <section className='profile'>
        <Header />
        <div className='profile__wrapper'>
          <div className='profile__avatar-container'>
            <UploadAvatar getImageSrc={getImageSrc}/>
            { getCreationNotice(userCreated) }
            { userCreated || getValidationNotice(isValid) }
          </div>
          <EditProfileForm 
            {...this.props}
            isValid={isValid}
            userCreated={userCreated}
            getProfileGender={this.getProfileGender}
          />
        </div>
      </section>
    )
  }
}

EditProfile.propTypes = {
  users: PropTypes.array,
  profileData: PropTypes.shape({
    gender: PropTypes.string,
    age: PropTypes.string,
    hairColor: PropTypes.string,
    height: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
  }),
  getProfileData: PropTypes.func,
  getImageSrc: PropTypes.func
}

export default connect(state => ({
  users: state.users.users
}), { createProfile })(editProfile(EditProfile))
