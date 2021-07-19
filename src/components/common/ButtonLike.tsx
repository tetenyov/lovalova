import React, { useState } from 'react';

import './styles/buttons.scss';

export default function ButtonLike () {
  const [isLiked, setIsLiked] = useState(false);

  const buttonClickHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button 
      type='button'
      className={isLiked ? 'button-like button-like--active' : 'button-like'}
      onClick={buttonClickHandler}
    />
  );
};
