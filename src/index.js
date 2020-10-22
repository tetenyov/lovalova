import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducers/rootReducer'
import { randomId, validateAge } from './middlewares/middlewares'
import App from './components/App';



const store = createStore(
  rootReducer, compose(
    applyMiddleware(randomId, validateAge),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
