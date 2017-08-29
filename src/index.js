import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { getCharacters } from './actions/characters';

const initialState = {};

const store = configureStore(initialState);
const rootNode = document.getElementById('root');

store.dispatch(getCharacters());

const root = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(root, rootNode);
