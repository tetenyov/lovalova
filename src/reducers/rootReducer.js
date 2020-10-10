import { combineReducers } from 'redux'
import loaderReducer from './loaderReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  users: usersReducer,
  loader: loaderReducer
})
