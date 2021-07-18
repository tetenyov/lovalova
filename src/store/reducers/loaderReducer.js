import { SHOW_LOADER, REMOVE_LOADER } from '../../constants/action-types';

const initialLoaderState = {
  isLoading: null
}

export default (state = initialLoaderState, action) => {
  const { type } = action

  switch (type) {
    case SHOW_LOADER:
      return {...state, isLoading: true};
    
    case REMOVE_LOADER:
      return {...state, isLoading: false};

    default: 
      return state
  }
}
