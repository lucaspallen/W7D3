import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON, CREATED_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, action.pokemon, state);
      return newState;
    case RECEIVE_ONE_POKEMON:
      newState = merge({}, state, removeItems(action.pokemon));
      return newState;
    case CREATED_POKEMON:
      newState = merge({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }

};

function removeItems(action) {
  let newObject = {};
  let keys = Object.keys(action);
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== "items") {
      newObject[keys[i]] = action[keys[i]];
    }
  }
  return newObject;
}

export default pokemonReducer;
