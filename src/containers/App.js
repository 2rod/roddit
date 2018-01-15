import React from 'react';
import AppContainer from './AppContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postsReducer from '../reducers';

const store = createStore(
  postsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App;
