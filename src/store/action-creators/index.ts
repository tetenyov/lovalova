import { 
  CHANGE_FILTER, 
  CREATE_PROFILE, 
  CHOOSE_GENDER, 
  SHOW_LOADER, 
  REMOVE_LOADER 
} from '../../constants/action-types';

import { TFilterData, TProfileData } from '../../types/action-creators';

export function applyFilter(filterData: TFilterData) {
  return {
    type: CHANGE_FILTER,
    payload: filterData,
  };
};

export function createProfile(profileData: TProfileData) {
  return {
    type: CREATE_PROFILE,
    payload: profileData,
  };
};

export function chooseGender(gender: string) {
  return {
    type: CHOOSE_GENDER,
    payload: gender,
  };
};
