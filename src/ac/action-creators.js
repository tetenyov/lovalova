import { CHANGE_AGE } from '../constants/action-types'

export function changeAge(ageData) {
  return {
    type: CHANGE_AGE,
    payload: ageData
  }
}
