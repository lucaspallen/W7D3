import { connect } from 'react-redux';
import { selectSinglePokemon, selectItems } from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
  let item_ids = (state.entities.pokemon[ownProps.match.params.pokemonId].item_ids);
  if (!item_ids) {
    item_ids = [];
  }
  return ({
  singlePokemon: selectSinglePokemon(state, ownProps.match.params.pokemonId),
  items: selectItems(state, item_ids)
});
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
