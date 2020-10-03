import usersList from '../users'
import { CHANGE_AGE } from '../constants/action-types'

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
  const { type, payload: ageData } = action

  switch (type) {
    case CHANGE_AGE:
      return {...state, 
        age: {
          from: ageData.name === 'age-min' ? ageData.value : state.age.from,
          to: ageData.name === 'age-max' ? ageData.value : state.age.to
        },

        hairColors: ageData.name.includes('hair') && ageData.isChecked 
          ? [...state.hairColors, ageData.name] 
          : state.hairColors.filter(color => color !== ageData.name),

        heights: ageData.name.includes('height') && ageData.isChecked 
        ? [...state.heights, ageData.name] 
        : state.heights.filter(height => height !== ageData.name)
      }
  }
  return state
}
