import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/form-upload.scss'
import '../../styles-global/visually-hidden.scss'

class UploadAvatar extends Component {
  state = {
    src: ''
  }

  inputChangeHandler = (evt) => {
    const file = evt.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const { getImageSrc } = this.props
      const imageSrc = reader.result
      this.setState({ src: imageSrc })
      getImageSrc(imageSrc)
      
    }
  }

  render () {
    return (
        <form className='form-upload' id='form' encType='multipart/form-data' autoComplete='off'>
          <input className='visually-hidden' type='file' id='file-download' name='file-download' multiple accept='image/*' 
            onChange={ this.inputChangeHandler }
          />
          <label className='form-upload__download' htmlFor='file-download'>
            <img className='form-upload__image' src={ this.state.src } />
          </label>
        </form>
      )
  }
}

UploadAvatar.propTypes = {
  getImageSrc: PropTypes.func.isRequired
}

export default UploadAvatar
