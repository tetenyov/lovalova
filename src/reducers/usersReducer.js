import usersList from '../users'
import { CHANGE_AGE } from '../constants/action-types'

const initialUsersState = {
  users: usersList,
  age: {
    from: null,
    to: null
  },
  hairColor: [],
  height: []
};

export default (state=initialUsersState, action) => {
  const { type, payload: ageData } = action
  
  switch (type) {
    case CHANGE_AGE:
      return {...state, 
        age: {
          from: ageData.name === 'age-min' ? ageData.value : state.age.from,
          to: ageData.name === 'age-max' ? ageData.value : state.age.to
        }}
  }
  return state
}
