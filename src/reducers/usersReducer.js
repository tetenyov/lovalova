import usersList from '../users'
import { CHANGE_FILTER, CREATE_PROFILE } from '../constants/action-types'

const initialUsersState = {
  users: usersList,
  age: {
    from: '',
    to: ''
  },
  hairColors: [],
  heights: []
};

export default (state=initialUsersState, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_FILTER:
      return {...state, 
        age: {
          from: payload.name === 'age-min' ? payload.value : state.age.from,
          to: payload.name === 'age-max' ? payload.value : state.age.to
        },

        hairColors: payload.name.includes('hair') && payload.isChecked 
          ? [...state.hairColors, payload.name] 
          : state.hairColors.filter(color => color !== payload.name),

        heights: payload.name.includes('height') && payload.isChecked 
        ? [...state.heights, payload.name] 
        : state.heights.filter(height => height !== payload.name)
      }
    case CREATE_PROFILE:
          return { ...state,
            users: [payload , ...state.users] }
  }
  return state
}
