import React from 'react'
// import { connect } from 'react-redux'
// import { createProfile } from '../ac/action-creators'

const editProfile = (WrappedComponent) => (
  class EditProfile extends React.Component {
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
          {...this.props}
          getProfileData={ this.getProfileData }
          getImageSrc={ this.getImageSrc }
          generateId={ this.generateId }
        />
      )
    }
  }
)

export default editProfile
