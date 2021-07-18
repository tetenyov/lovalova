import usersList from '../../data/users';
import { CHANGE_FILTER, CREATE_PROFILE, CHOOSE_GENDER } from '../../constants/action-types';

const initialUsersState = {
  users: usersList,
  age: {
    from: '',
    to: ''
  },
  hairColors: [],
  heights: [],
  userGenderInterest: ''
};

export default (state=initialUsersState, action) => {
  const { type, payload } = action
  const getHairColors = () => {
    return (
      payload.name.includes('hair') && payload.isChecked 
            ? [...state.hairColors, payload.name] 
            : state.hairColors.filter(color => color !== payload.name)
    )
  }
  const getHeights = () => {
    return (
      payload.name.includes('height') && payload.isChecked 
        ? [...state.heights, payload.name] 
        : state.heights.filter(height => height !== payload.name)
    )
  }

  switch (type) {
    case CHANGE_FILTER:
      return {
        ...state, 
          age: {
            from: payload.name === 'age-min' ? payload.value : state.age.from,
            to: payload.name === 'age-max' ? payload.value : state.age.to
          },
          hairColors: getHairColors(),
          heights: getHeights()
      }; 

    case CREATE_PROFILE:
      return { 
        ...state,
         users: [payload , ...state.users] 
      };

    case CHOOSE_GENDER:
      return { 
        ...state,
          userGenderInterest: payload
      };
      
    default: 
      return state
  }
}
