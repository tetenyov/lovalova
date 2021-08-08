import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { TUserPageUsers, TEditProfile } from '../../types/components';
import { RootState } from '../../types/root-state';

import Header from '../header/Header';
import UploadAvatar from './UploadAvatar';
import EditProfileForm from './EditProfileForm';
import editProfile from '../../decorators/editProfile';
import { validateEditProfile } from '../../utils/utils';

import './styles/edit-profile.scss';
import './styles/form-profile.scss';

function EditProfile(props: TEditProfile) {
  const { profileData, getImageSrc } = props;

  const [ isUserCreated, setIsUserCreated ] = useState(false);
  const [ gender, setGender ] = useState('');

  const { users }: TUserPageUsers = useSelector((state: RootState) => state.users);
  const prevUsers = useRef(users).current;

  useEffect(() => {
    if (prevUsers.length !== users.length) {
      setIsUserCreated(true);
      console.log('different')
    }
  }, [ users ])

  const isValid = validateEditProfile(profileData);

  const getProfileGender = (evt: React.ChangeEvent<HTMLFormElement>) => {
    setGender(evt.target.value)
  };

  const getCreationNotice = (isCreated: boolean) => {
    return isCreated && (
      <p className='profile__notice'>
        Your profile is  
        <NavLink to={`/${gender}`}>
          <span className='profile__link'> on site!</span>
        </NavLink>
      </p> 
    );
  };

  const getValidationNotice = (isValid: boolean) => {
    return (
      <p 
        className={!isValid 
        ? 'form-upload__validation-notice' 
        : 'form-upload__validation-notice form-upload__validation-notice--success'}
      >
        { isValid 
            ? 'Now you can create profile (Create profile button)'
            : 'Please fill all the fields of the form and upload photo'
        }
      </p>
    );
  };
  
  return (
    <section className='profile'>
      <Header />
      <div className='profile__wrapper'>
        <div className='profile__avatar-container'>
          <UploadAvatar getImageSrc={getImageSrc}/>
          { getCreationNotice(isUserCreated) }
          { isUserCreated || getValidationNotice(isValid) }
        </div>
        <EditProfileForm 
          {...props}
          isValid={isValid}
          isUserCreated={isUserCreated}
          getProfileGender={getProfileGender}
        />
      </div>
    </section>
  );
};

export default editProfile(EditProfile);
