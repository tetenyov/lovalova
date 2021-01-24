import React from 'react'

export function validateEditProfile(inputData) {

  return Object.values(inputData).every(input => input.length !== 0)
}

export function isChecked(checked, name) {
  return checked.includes(name)
}

export function getMessagesList(messages) {
  return (
    messages.map((message, i) => {
      return (
        <li className='form-pm__message' key={i}>{ message }</li> 
      )
    })
  )
}
