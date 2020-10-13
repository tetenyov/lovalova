import { CHANGE_FILTER, CREATE_PROFILE, CHOOSE_GENDER, SHOW_LOADER, REMOVE_LOADER } from '../constants/action-types'

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
    type: CHOOSE_GENDER,
    payload: gender
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER,
  }
}

export function removeLoader() {
  return {
    type: REMOVE_LOADER,
  }
}