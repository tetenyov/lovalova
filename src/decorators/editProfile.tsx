import React, { Component, ComponentType } from 'react';

import { TEditProfile } from '../types/components';

export default (WrappedComponent: ComponentType<TEditProfile>) => (
  class EditProfile extends Component {
    state = {
      gender: '',
      age: '', 
      hairColor: '', 
      height: '',
      name: '',
      photo: ''
    }

    getProfileData = (evt: React.ChangeEvent<HTMLFormElement>) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    getImageSrc = (imageSrc: string) => {
      this.setState({
        photo: imageSrc
      })
    }

    render() {
      return (
        <WrappedComponent
          profileData={ this.state }
          { ...this.props }
          getProfileData={ this.getProfileData }
          getImageSrc={ this.getImageSrc }
        />
      );
    }
  }
)
