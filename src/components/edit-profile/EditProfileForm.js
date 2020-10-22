import React from 'react'

function EditProfileForm(props) {
  const { userCreated, isValid, getProfileGender, getProfileData } = props

  const formChangeHandler = (evt) => {
    getProfileGender(evt)
    getProfileData(evt)
  }

  const formSubmitHandler = (evt) => {
    evt.preventDefault()
    const { createProfile, profileData } = props
    createProfile(profileData)
  }

  return (
    <form className='form-profile' 
      onChange={formChangeHandler}
      onSubmit={formSubmitHandler}
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
      <button 
        type='submit'
        className={
          userCreated || isValid ? 'form-profile__create-btn' 
            : 'form-profile__create-btn form-profile__create-btn--disabled'
        }
        disabled={userCreated || !isValid}
      >
        Create profile
      </button>
    </form>
  )
}

export default EditProfileForm
