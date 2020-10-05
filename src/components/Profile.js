import React from 'react'
import NavMain from './NavMain'
import '../scss/profile.scss'

class Profile extends React.Component {
  state = {
    gender: {
      male: false, 
      female: false
    },
    age: '', 
    hairColor: {
      blond: false,
      brunet: false,
      brown: false,
      red: false,
    }, 
    height: {
      tall: false,
      medium: false,
      low: false
    },
    name: ''
  }

  render() {
    return (
      <section className='profile'>
        <NavMain />
        <form className='form-profile'>
          <fieldset>
            <legend>Gender</legend>
            <label htmlFor='profile-gender-male'>Male</label>
            <input type='radio' id='profile-gender-male' name='radio-gender' value='male'/>
            <label htmlFor='profile-gender-female'>Female</label>
            <input type='radio' id='profile-gender-female' name='radio-gender' value='female'/>
          </fieldset>
          <fieldset>
            <legend>Age</legend>
            {/* <label htmlFor='profile-age'>Male</label> */}
            <input type='number' id='profile-age' name='profile-age'/>
          </fieldset>
          <fieldset>
            <legend>Hair color</legend>
            <label htmlFor='profile-hair-blond'>Blond</label>
            <input type='radio' id='profile-hair-blond' name='radio-hair' value='blond'/>
            <label htmlFor='profile-hair-brunet'>Brunet</label>
            <input type='radio' id='profile-hair-brunet' name='radio-hair' value='brunet'/>
            <label htmlFor='profile-hair-brown'>Brown</label>
            <input type='radio' id='profile-hair-brown' name='radio-hair' value='brown'/>
            <label htmlFor='profile-hair-red'>Red</label>
            <input type='radio' id='profile-hair-red' name='radio-hair' value='red'/>
          </fieldset>
          <fieldset>
            <legend>Height</legend>
            <label htmlFor='profile-height-tall'>Tall</label>
            <input type='radio' id='profile-height-tall' name='radio-height' value='tall'/>
            <label htmlFor='profile-height-medium'>Medium</label>
            <input type='radio' id='profile-height-medium' name='radio-height' value='medium'/>
            <label htmlFor='profile-height-low'>Low</label>
            <input type='radio' id='profile-height-low' name='radio-height' value='low'/>
          </fieldset>
          <fieldset>
            <legend>Name</legend>
            {/* <label htmlFor='profile-name'>Male</label> */}
            <input type='text' id='profile-name' name='profile-name'/>
          </fieldset>
        </form>
      </section>
      
    )
  }
}

export default Profile
