import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { getCharacters } from './actions/characters';

const initialState = {};

const store = configureStore(initialState);

store.dispatch(getCharacters());

const root = (
  <Provider store={store}>
      <App />
  </Provider>
);

const rootNode = document.getElementById('root');

ReactDOM.render(root, rootNode);
