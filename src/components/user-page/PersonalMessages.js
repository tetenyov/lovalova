import React from 'react'
import './styles/form-pm.scss'

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
    console.log('----messages')
    const { messages } = this.state
    const messagesList = messages.length 
      ? messages.map((message, id) => {
          return (
            <li key={id}>{ message }</li>
          )
        })
      : <p>no messages yet</p>;

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
              <textarea className='form-pm__message-input' id='pm-textarea'
                placeholder='type here'
                value={ this.state.message }
                onChange={ this.inputChangeHandler }
              />
              <button className='form-pm__send-btn' type='submit'>Send</button>
            </section>
        }
      </form>
    )
  }
}

export default PersonalMessages
