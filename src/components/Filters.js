import React from 'react'
import { connect } from 'react-redux'
import { changeAge } from '../ac/action-creators'
import '../scss/form-filters.scss'

function Filters (props) {
  
  const inputChangeHandler = (evt) => {
    const { changeAge } = props
    const ageData = {
      value: evt.target.value,
      name: evt.target.name,
      isChecked: evt.target.checked
    }

    changeAge(ageData)
  }

  return (
    <form className='form-filters' onChange={ inputChangeHandler }>
      <fieldset>
        <legend>Age</legend>
        <label htmlFor='age-min'>From</label>
        <input type='number' id='age-min' name='age-min' min='24' max='50'/>
        <label htmlFor='age-max'>To</label>
        <input type='number' id='age-max' name='age-max' min='18' max='50'/>
      </fieldset>
      <fieldset>
        <legend>Hair color</legend>
        <label htmlFor='hair-blond'>Blond</label>
        <input type='checkbox' id='hair-blond' name='hair-blond'/>
        <label htmlFor='hair-brunet'>Brunet</label>
        <input type='checkbox' id='hair-brunet' name='hair-brunet'/>
        <label htmlFor='hair-brown'>Brown</label>
        <input type='checkbox' id='hair-brown' name='hair-brown'/>
        <label htmlFor='hair-red'>Red</label>
        <input type='checkbox' id='hair-red' name='hair-red'/>
      </fieldset>
      <fieldset>
        <legend>Height</legend>
        <label htmlFor='height-tall'>Tall</label>
        <input type='checkbox' id='height-tall' name='height-tall'/>
        <label htmlFor='height-medium'>Medium</label>
        <input type='checkbox' id='height-medium' name='height-medium'/>
        <label htmlFor='height-low'>Low</label>
        <input type='checkbox' id='height-low' name='height-low'/>
      </fieldset>
      
    </form>
  )
}

export default connect(null, { changeAge })(Filters)
