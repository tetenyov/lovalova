import React, { Component } from 'react'

import ButtonSend from '../../components/common/ButtonSend'

import './styles/form-pm.scss'

class PersonalMessages extends Component {
  state = {
    message: '',
    messages: [],
    isOpen: false
  }

  inputChangeHandler = (evt) => {
     this.setState({
      message: evt.target.value
    })
  }

  formSubmitHandler = (evt) => {
    evt.preventDefault()
    this.setState(state => ({
      message: '',
      messages: [...state.messages, this.state.message]
    }))
  }

  labelClickHandler = () => {
     this.setState(state => ({
       isOpen: !state.isOpen
     }))
  }

  render() {
    const { messages } = this.state
    const getMessagesList = () => {
      return (
        messages.map((message, i) => {
          return (
            <li className='form-pm__message' key={i}>{ message }</li>
          )
        })
      )
    }

    const messagesList = messages.length 
      ? getMessagesList()
      : <p className='form-pm__notice'>no messages yet</p>;

    return (
      <form onSubmit={ this.formSubmitHandler } className='form-pm'>
        <label className='form-pm__label' htmlFor='pm-textarea'
          onClick={ this.labelClickHandler }
        >
          Say something
        </label>
    
        { 
          this.state.isOpen 
          && <section className='form-pm__dialog'>
              <ul className='form-pm__messages-list'>
                { messagesList }
              </ul>
              <textarea className='form-pm__message-textarea' id='pm-textarea'
                placeholder='type here'
                value={ this.state.message }
                onChange={ this.inputChangeHandler }
              />
              <ButtonSend />
            </section>
        }
      </form>
    )
  }
}

export default PersonalMessages
