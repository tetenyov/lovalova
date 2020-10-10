import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { createProfile } from '../../ac/action-creators'
import Header from '../header/Header'
import UploadAvatar from './UploadAvatar'
import editProfile from '../../hoc/editProfile'
import './styles/edit-profile.scss'
import './styles/form-profile.scss'

class EditProfile extends React.Component {
  state = {
    userCreated: false,
    gender: ''
  }

  formChangeHandler = (evt) => {
    const { generateId } = this.props
    generateId()
    this.props.getProfileData(evt)
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  formSubmitHandler = (evt) => {
    evt.preventDefault()
    const { createProfile, profileData } = this.props
    
    createProfile(profileData)
  }
  
  componentDidUpdate(prevProps) {
     if (this.props.users.length !== prevProps.users.length) {
       this.setState({
         userCreated: true
       })
     }
  }

  render() {
    const { getImageSrc, generateId } = this.props
    const { userCreated, gender } = this.state
    return (
      <section className='profile'>
        <Header />
        <div className='profile__wrapper'>
          <div className='profile__avatar-container'>
          <UploadAvatar getImageSrc={getImageSrc} generateId={generateId}/>
          { 
            userCreated 
              && <p className='profile__notice'>
                   Your profile is  
                  <NavLink to={`/${gender}`}>
                    <span className='profile__link'> on site!</span>
                  </NavLink>
                 </p> 
          }
          </div>
          <form className='form-profile' 
          onChange={this.formChangeHandler}
          onSubmit={this.formSubmitHandler}
          >
            <fieldset className='form-profile__group'> 
              <legend className='form-profile__legend'>Gender</legend>
              <input type='radio' id='profile-gender-male' name='gender' value='male'/>
              <label htmlFor='profile-gender-male'>Male</label>
              <input type='radio' id='profile-gender-female' name='gender' value='female'/>
              <label htmlFor='profile-gender-female'>Female</label>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend className='form-profile__legend'>Age</legend>
              <input type='number' id='profile-age' name='age'/>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend className='form-profile__legend'>Hair color</legend>
              <input type='radio' id='profile-hair-blond' name='hairColor' value='blond'/>
              <label htmlFor='profile-hair-blond'>Blond</label>
              <input type='radio' id='profile-hair-brunet' name='hairColor' value='brunet'/>
              <label htmlFor='profile-hair-brunet'>Brunet</label>
              <input type='radio' id='profile-hair-brown' name='hairColor' value='brown'/>
              <label htmlFor='profile-hair-brown'>Brown</label>
              <input type='radio' id='profile-hair-red' name='hairColor' value='red'/>
              <label htmlFor='profile-hair-red'>Red</label>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend className='form-profile__legend'>Height</legend>
              <input type='radio' id='profile-height-tall' name='height' value='tall'/>
              <label htmlFor='profile-height-tall'>Tall</label>
              <input type='radio' id='profile-height-medium' name='height' value='medium'/>
              <label htmlFor='profile-height-medium'>Medium</label>
              <input type='radio' id='profile-height-low' name='height' value='low'/>
              <label htmlFor='profile-height-low'>Low</label>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend className='form-profile__legend'>Name</legend>
              <input type='text' id='profile-name' name='name'/>
            </fieldset>
            <button className='form-profile__create-btn' type='submit'>Create profile</button>
          </form>
        </div>
      </section>
    )
  }
}

export default connect(state => ({
  users: state.users.users
}), { createProfile })(editProfile(EditProfile))
