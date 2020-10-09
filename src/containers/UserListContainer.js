import { connect } from 'react-redux'
import UserList from '../components/main-page/UserList'

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps
  const { users, age, hairColors, heights } = state.users

  const isColor = (allColors, color) => {
    return allColors.length ? allColors.find(el => el.includes(color)) : true
  }

  const isHeight = (allHeights, height) => {
    return allHeights.length ? allHeights.find(el => el.includes(height)) : true
  }
  
  const filteredUsers = users.filter(user => pathname.slice(1) === user.gender 
    && (user.age >= age.from || age.from === '')
    && (user.age <= age.to || age.to === '')
    && isColor(hairColors, user.hairColor)
    && isHeight(heights, user.height))

  return {
    filteredUsers
  }
};

export default connect(mapStateToProps)(UserList)
