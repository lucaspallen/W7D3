import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectSinglePokemon = (state, id) => {
  return state.entities.pokemon[id];
};

export const selectSingleItem = (state, id) => {
  return state.items[id];
};

export const selectItems = (state, ids) => {
  let result = [];
  for (let i = 0; i < ids.length; i++) {
    result.push(state.items[ids[i]]);
  }
  return result;
};
