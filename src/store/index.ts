import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import { randomId, validateAge } from './middlewares/middlewares';


export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(randomId, validateAge)
  )
);
