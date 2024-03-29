import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../types/root-state';
import { TFilters } from '../../types/components';

import { applyFilter } from '../../store/action-creators';
import { isChecked } from '../../utils/utils';

import './form-filters.scss';

export default function Filters() {
  const { age, hairColors, heights }: TFilters = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  const handleFormChange = (evt: React.ChangeEvent<HTMLFormElement>) => {
    const filterData = {
      name: evt.target.name,
      value: evt.target.value,
      isChecked: evt.target.checked
    };

    dispatch(applyFilter(filterData));
  };

  return (
    <form className='form-filters' onChange={handleFormChange}>
      <h3 className='form-filters__heading'>Preferences</h3>
      <fieldset className='form-filters__group'>
        <legend className='form-filters__legend'>Age</legend>
        <p className='form-filters__wrapper form-filters__wrapper--age'>
          <label className='form-filters__label form-filters__label--age' htmlFor='age-min'>From:</label>
          <input type='number' id='age-min' defaultValue={ age.from } name='age-min'/>
        </p>
        <p className='form-filters__wrapper form-filters__wrapper--age'>
          <label className='form-filters__label form-filters__label--age' htmlFor='age-max'>To:</label>
          <input type='number' id='age-max' defaultValue={ age.to } name='age-max'/>
        </p>
      </fieldset>
      <fieldset className='form-filters__group'>
        <legend className='form-filters__legend'>Hair color</legend>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='hair-blond' 
            defaultChecked={ isChecked(hairColors, 'hair-blond') } 
            name='hair-blond'/>
          <label className='form-filters__label' htmlFor='hair-blond'>Blond</label>
        </p>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='hair-brunet' 
            defaultChecked={ isChecked(hairColors, 'hair-brunet') } 
            name='hair-brunet'/>
          <label className='form-filters__label' htmlFor='hair-brunet'>Brunet</label>
        </p>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='hair-brown' 
            defaultChecked={ isChecked(hairColors, 'hair-brown') } 
            name='hair-brown'/>
          <label className='form-filters__label' htmlFor='hair-brown'>Brown</label>
        </p>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='hair-red' 
            defaultChecked={ isChecked(hairColors, 'hair-red') } 
            name='hair-red'/>
          <label className='form-filters__label' htmlFor='hair-red'>Red</label>
        </p>
      </fieldset>
      <fieldset className='form-filters__group'>
        <legend className='form-filters__legend'>Height</legend>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='height-tall' 
            defaultChecked={ isChecked(heights, 'height-tall') } 
            name='height-tall'/>
          <label className='form-filters__label' htmlFor='height-tall'>Tall</label>
        </p>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='height-medium' 
            defaultChecked={ isChecked(heights, 'height-medium') } 
            name='height-medium'/>
          <label className='form-filters__label' htmlFor='height-medium'>Medium</label>
        </p>
        <p className='form-filters__wrapper'>
          <input 
            type='checkbox' 
            id='height-low' 
            defaultChecked={ isChecked(heights, 'height-low') } 
            name='height-low'/>
          <label className='form-filters__label' htmlFor='height-low'>Low</label>
        </p>
      </fieldset>
    </form>
  );
};
