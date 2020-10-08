import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { createProfile } from '../ac/action-creators'
import Header from './Header'
import UploadAvatar from './UploadAvatar'
import editProfile from './editProfile'
import '../scss/profile.scss'
import '../scss/form-profile.scss'

class Profile extends React.Component {

  formChangeHandler = (evt) => {
    const { getProfileData } = this.props
    getProfileData(evt)
  }

  formSubmitHandler = (evt) => {
    evt.preventDefault()

    const { createProfile, profileData } = this.props
    createProfile(profileData)
  }

  render() {
    const { getImageSrc, generateId } = this.props

    return (
      <section className='profile'>
        <Header />
        <NavLink to='/male'>maleList</NavLink>
        <div className='profile__wrapper'>
          <UploadAvatar getImageSrc={getImageSrc} generateId={generateId}/>
          <form className='form-profile' 
          onChange={ this.formChangeHandler }
          onSubmit={ this.formSubmitHandler }
          >
            <fieldset className='form-profile__group'> 
              <legend>Gender</legend>
              <label htmlFor='profile-gender-male'>Male</label>
              <input type='radio' id='profile-gender-male' name='gender' value='male'/>
              <label htmlFor='profile-gender-female'>Female</label>
              <input type='radio' id='profile-gender-female' name='gender' value='female'/>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend>Age</legend>
              <input type='number' id='profile-age' name='age'/>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend>Hair color</legend>
              <label htmlFor='profile-hair-blond'>Blond</label>
              <input type='radio' id='profile-hair-blond' name='hairColor' value='blond'/>
              <label htmlFor='profile-hair-brunet'>Brunet</label>
              <input type='radio' id='profile-hair-brunet' name='hairColor' value='brunet'/>
              <label htmlFor='profile-hair-brown'>Brown</label>
              <input type='radio' id='profile-hair-brown' name='hairColor' value='brown'/>
              <label htmlFor='profile-hair-red'>Red</label>
              <input type='radio' id='profile-hair-red' name='hairColor' value='red'/>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend>Height</legend>
              <label htmlFor='profile-height-tall'>Tall</label>
              <input type='radio' id='profile-height-tall' name='height' value='tall'/>
              <label htmlFor='profile-height-medium'>Medium</label>
              <input type='radio' id='profile-height-medium' name='height' value='medium'/>
              <label htmlFor='profile-height-low'>Low</label>
              <input type='radio' id='profile-height-low' name='height' value='low'/>
            </fieldset>
            <fieldset className='form-profile__group'>
              <legend>Name</legend>
              <input type='text' id='profile-name' name='name'/>
            </fieldset>
            <button type='submit'></button>
          </form>
        </div>
      </section>
    )
  }
}

export default connect(null, { createProfile })(editProfile(Profile))
