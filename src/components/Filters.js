import React from 'react'
import { connect } from 'react-redux'
import { applyFilter } from '../ac/action-creators'
import '../scss/form-filters.scss'

function Filters (props) {
  
  const inputChangeHandler = (evt) => {
    const { applyFilter } = props
    const filterData = {
      value: evt.target.value,
      name: evt.target.name,
      isChecked: evt.target.checked
    }

    applyFilter(filterData)
  }

  return (
    <form className='form-filters' onChange={ inputChangeHandler }>
      <h3>Preferences</h3>
      <fieldset className='form-filters__group'>
        <legend>Age</legend>
        <p className='form-filters__wrapper'>
          <label htmlFor='age-min'>From</label>
          <input type='number' id='age-min' name='age-min' min='24' max='50'/>
        </p>
        <p className='form-filters__wrapper'>
          <label htmlFor='age-max'>To</label>
          <input type='number' id='age-max' name='age-max' min='18' max='50'/>
        </p>
      </fieldset>
      <fieldset className='form-filters__group'>
        <legend>Hair color</legend>
        <p className='form-filters__wrapper'>
          <label htmlFor='hair-blond'>Blond</label>
          <input type='checkbox' id='hair-blond' name='hair-blond'/>
        </p>
        <p className='form-filters__wrapper'>
          <label htmlFor='hair-brunet'>Brunet</label>
          <input type='checkbox' id='hair-brunet' name='hair-brunet'/>
        </p>
        <p className='form-filters__wrapper'>
          <label htmlFor='hair-brown'>Brown</label>
          <input type='checkbox' id='hair-brown' name='hair-brown'/>
        </p>
        <p className='form-filters__wrapper'>
          <label htmlFor='hair-red'>Red</label>
          <input type='checkbox' id='hair-red' name='hair-red'/>
        </p>
      </fieldset>
      <fieldset className='form-filters__group'>
        <legend>Height</legend>
        <p className='form-filters__wrapper'>
          <label htmlFor='height-tall'>Tall</label>
          <input type='checkbox' id='height-tall' name='height-tall'/>
        </p>
        <p className='form-filters__wrapper'>
          <label htmlFor='height-medium'>Medium</label>
          <input type='checkbox' id='height-medium' name='height-medium'/>
        </p>
        <p className='form-filters__wrapper'>
          <label htmlFor='height-low'>Low</label>
          <input type='checkbox' id='height-low' name='height-low'/>
        </p>
      </fieldset>
    </form>
  )
}

export default connect(null, { applyFilter })(Filters)
