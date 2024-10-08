// store.js
import { createStore } from 'redux';
import dashboardReducer from './reducer';

const store = createStore(
  dashboardReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
