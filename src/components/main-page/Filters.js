import React from 'react'
import { connect } from 'react-redux'
import { applyFilter } from '../../ac/action-creators'
import './styles/form-filters.scss'

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
  const { from, to, hairColors, heights } = props

  const isChecked = (checked, name) => checked.includes(name)

  return (
    <form className='form-filters' onChange={ inputChangeHandler }>
      <h3 className='form-filters__heading'>Preferences</h3>
      <fieldset className='form-filters__group'>
        <legend className='form-filters__legend'>Age</legend>
        <p className='form-filters__wrapper form-filters__wrapper--age'>
          <label className='form-filters__label form-filters__label--age' htmlFor='age-min'>From:</label>
          <input type='number' id='age-min' value={from} name='age-min' min='24' max='50'/>
        </p>
        <p className='form-filters__wrapper form-filters__wrapper--age'>
          <label className='form-filters__label form-filters__label--age' htmlFor='age-max'>To:</label>
          <input type='number' id='age-max' value={to} name='age-max' min='18' max='50'/>
        </p>
      </fieldset>
      <fieldset className='form-filters__group'>
        <legend className='form-filters__legend'>Hair color</legend>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='hair-blond' checked={ isChecked(hairColors, 'hair-blond') } name='hair-blond'/>
          <label className='form-filters__label' htmlFor='hair-blond'>Blond</label>
        </p>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='hair-brunet' checked={ isChecked(hairColors, 'hair-brunet') } name='hair-brunet'/>
          <label className='form-filters__label' htmlFor='hair-brunet'>Brunet</label>
        </p>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='hair-brown' checked={ isChecked(hairColors, 'hair-brown') } name='hair-brown'/>
          <label className='form-filters__label' htmlFor='hair-brown'>Brown</label>
        </p>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='hair-red' checked={ isChecked(hairColors, 'hair-red') } name='hair-red'/>
          <label className='form-filters__label' htmlFor='hair-red'>Red</label>
        </p>
      </fieldset>
      <fieldset className='form-filters__group'>
        <legend className='form-filters__legend'>Height</legend>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='height-tall' checked={ isChecked(heights, 'height-tall') } name='height-tall'/>
          <label className='form-filters__label' htmlFor='height-tall'>Tall</label>
        </p>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='height-medium' checked={ isChecked(heights, 'height-medium') } name='height-medium'/>
          <label className='form-filters__label' htmlFor='height-medium'>Medium</label>
        </p>
        <p className='form-filters__wrapper'>
          <input type='checkbox' id='height-low' checked={ isChecked(heights, 'height-low') } name='height-low'/>
          <label className='form-filters__label' htmlFor='height-low'>Low</label>
        </p>
      </fieldset>
    </form>
  )
}

export default connect(state => ({
  from: state.users.age.from,
  to: state.users.age.to,
  hairColors: state.users.hairColors,
  heights: state.users.heights,
}), { applyFilter })(Filters)
