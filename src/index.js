// npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// local
import App from 'src/containers/App';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootReactElement, document.getElementById('root'));