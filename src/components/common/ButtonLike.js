import React from 'react'
import './styles/buttons.scss'

class ButtonLike extends React.Component {
  state = {
    isLike: false
  }

  buttonClickHandler = () => {
    this.setState(state => ({
      isLike: !state.isLike
    }))
  }

  render() {
    return (
      <button 
        className={ this.state.isLike ? 'button-like button-like--active' : 'button-like' }
        type='button' 
        onClick={ this.buttonClickHandler }
      />
    )
  }
};

export default ButtonLike
