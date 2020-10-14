import { CREATE_PROFILE } from '../constants/action-types'

export default (store) => (next) => (action) => {
  if (action.type === CREATE_PROFILE) {
    const randomId = (Math.round(Math.random() * Date.now())).toString()
    action.payload.id = randomId
  }
  
  return next(action)
}
