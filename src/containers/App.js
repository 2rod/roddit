import React from 'react';
import AppContainer from './AppContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

export default App;
