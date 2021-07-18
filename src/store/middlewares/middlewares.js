import { CREATE_PROFILE, CHANGE_FILTER } from '../../constants/action-types';

export const randomId = (store) => (next) => (action) => {
  if (action.type === CREATE_PROFILE) {
    const randomId = (Math.round(Math.random() * Date.now())).toString()
    action.payload.id = randomId
  }

  return next(action)
}

//this mw prevents action if age 'to' is less then age 'from'
export const validateAge = (store) => (next) => (action) => {
  if (action.type === CHANGE_FILTER && action.payload.name === 'age-max') {
    const {from} = store.getState().users.age
    const to = action.payload.value

    if (parseInt(to, 10) < parseInt(from, 10)) {
      return next
    }
  }

  return next(action)
}
