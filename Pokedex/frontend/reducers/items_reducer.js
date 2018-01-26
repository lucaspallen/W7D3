import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      let newState = merge({}, state, action.pokemon.items);
      return newState;
    default:
      return state;
  }
};



export default itemsReducer;
