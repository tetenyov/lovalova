import React, { Component } from 'react'

const editProfile = (WrappedComponent) => (
  class EditProfile extends Component {
    state = {
      id: '',
      gender: '',
      age: '', 
      hairColor: '', 
      height: '',
      name: '',
      photo: ''
    }

    getProfileData = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    getImageSrc = (imageSrc) => {
      this.setState({
        photo: imageSrc
      })
    }

    generateId = () => {
      const id = (Math.round(Math.random() * Date.now())).toString()
      this.setState({
        id
      })
      return id
    }

    render() {
      return (
        <WrappedComponent
          profileData={ this.state }
          { ...this.props }
          getProfileData={ this.getProfileData }
          getImageSrc={ this.getImageSrc }
          generateId={ this.generateId }
        />
      )
    }
  }
)

export default editProfile
