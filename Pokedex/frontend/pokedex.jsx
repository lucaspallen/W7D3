import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';
import { configureStore } from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

// window.receiveAllPokemon = receiveAllPokemon;
// window.fetchAllPokemon = fetchAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// window.selectAllPokemon = selectAllPokemon;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  const rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, rootEl);
});
