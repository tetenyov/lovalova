import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './reducers/rootReducer'
import App from './components/App';



const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
