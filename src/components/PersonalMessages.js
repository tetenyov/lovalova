import React from 'react'
import '../scss/form-pm.scss'

class PersonalMessages extends React.Component {
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
    const messagesList = messages.length 
      ? messages.map((message, id) => {
          return (
            <li key={id}>{ message }</li>
          )
        })
      : <p>write smth</p>;

    return (
      <form onSubmit={ this.formSubmitHandler } className='form-pm'>
        <label className='form-pm__label' htmlFor='pm-input'
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
              <input className='form-pm__message-input' type='text' id='pm-input'
                value={ this.state.message }
                onChange={ this.inputChangeHandler }
              />
              <button className='form-pm__send-message' type='submit'>Send</button>
            </section>
        }
      </form>
    )
  }
}

export default PersonalMessages
