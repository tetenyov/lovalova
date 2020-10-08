import React from 'react'
import '../scss/form-upload.scss'
import '../scss/visually-hidden.scss'

class UploadAvatar extends React.Component {
    state = {
      src: ''
    }

    inputChangeHandler = (evt) => {
    
      const file = evt.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = () => {
        const { getImageSrc, generateId } = this.props
        const imageSrc = reader.result
        this.setState({ src: imageSrc })
        getImageSrc(imageSrc)
        generateId()
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

export default UploadAvatar
