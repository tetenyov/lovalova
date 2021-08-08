import React, { useState } from 'react';

import { TUploadAvatar } from '../../types/components';

import Spinner from '../common/Spinner';

import './styles/form-upload.scss';
import '../../styles-global/visually-hidden.scss';

export default 
  function UploadAvatar({ getImageSrc }: TUploadAvatar) {
    const [ imageSrc, setImageSrc ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);

      if (evt.target.files && evt.target.files[0]) {
        const file = evt.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
  
        reader.onload = () => {
          const imageSrc = String(reader.result);
  
          setIsLoading(false);
          setImageSrc(imageSrc);
          getImageSrc(imageSrc);
        };
      }
    };

    return (
      <form className='form-upload' id='form' encType='multipart/form-data' autoComplete='off'>
        <input 
          className='visually-hidden' 
          type='file' 
          id='file-download' 
          name='file-download'
          multiple accept='image/*' 
          onChange={ handleInputChange } />
        <label className='form-upload__download' htmlFor='file-download'>
          <img 
            className='form-upload__image' 
            src={ imageSrc }
            alt=''/>
        { isLoading && <Spinner /> }
        </label>
      </form>
    );
};
