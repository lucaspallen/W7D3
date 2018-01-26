import React from 'react';
import { Link } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    let thisPokemon = this.props.singlePokemon;
    let itemLinks = "";
    if (!thisPokemon.item_ids) {
      return <h1>Coming soon</h1>;
    } else {
      itemLinks = this.props.items.map( item => {
        return <Link key={item.id} to={`/pokemon/${thisPokemon.id}/items/${item.id}`}>
          <img className="item-img" src={item.image_url} />
        </Link>;
      });
    }
    return (
      <div>
        <p>Pokemon Id: {thisPokemon.id}</p>
        <p>Name: {thisPokemon.name}</p>
        <p>Attack: {thisPokemon.attack}</p>
        <p>Defense: {thisPokemon.defense}</p>
        <p>Moves: {thisPokemon.moves}</p>
        <p>Type: {thisPokemon.poke_type}</p>
        {itemLinks}
        <Route path="/pokemon/:pokemonId/items/:itemId"
               component={ItemDetailContainer} />
      </div>
    );
  }
}

export default PokemonDetail;
