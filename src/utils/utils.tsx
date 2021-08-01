import React from 'react';

import { TProfileData } from '../types/action-creators';

export function validateEditProfile(inputData: TProfileData) {
  return Object
    .values(inputData)
    .every(input => input.length !== 0);
};

export function isChecked(checked: string, name: string) {
  return checked.includes(name);
};

export function getMessagesList(messages: string[]) {
  return (
    messages.map((message, i) => {
      return (
        <li className='form-pm__message' key={i}>
          { message }
        </li> 
      )
    })
  );
};
