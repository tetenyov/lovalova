import { CHANGE_FILTER, CREATE_PROFILE, CHOOSE__GENDER } from '../constants/action-types'

export function applyFilter(filterData) {
  return {
    type: CHANGE_FILTER,
    payload: filterData
  }
}

export function createProfile(profileData) {
  return {
    type: CREATE_PROFILE,
    payload: profileData
  }
}

export function chooseGender(gender) {
  return {
    type: CHOOSE__GENDER,
    payload: gender
  }
}
