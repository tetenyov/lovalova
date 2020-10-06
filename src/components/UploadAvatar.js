import React from 'react'
import '../scss/form-upload.scss'
import '../scss/visually-hidden.scss'

function UploadAvatar(props) {


  // const b64_to_utf8 = (str) => {
  //   return decodeURIComponent(escape(window.atob(str)));
  // } 

  const inputChangeHandler = (evt) => {
    
    const file = evt.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      const { getImageSrc, generateId } = props
       const imageSrc = reader.result
       getImageSrc(imageSrc)
       generateId()
    }
  
  }

  return (
    <form className='form-upload' id='form' encType='multipart/form-data' autoComplete='off'>
      <input className='visually-hidden' type='file' id='file-download' name='file-download' multiple accept='image/*' 
        onChange={ inputChangeHandler }
      />
      <label className='form-upload__download' htmlFor='file-download'>Download</label>
    </form>
  )
}

export default UploadAvatar
