import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="Everything">
        <ul>
          {
            this.props.allPokemon.map(
            (poke) => {
              // console.log(poke);
              return <PokemonIndexItem
                      key={poke.id}
                      pokemon={poke}/>;
            }
          )}
        </ul>
        <Route path="/pokemon/:pokemonId"
               component={PokemonDetailContainer} />
      </div>
    );

  }
}

export default PokemonIndex;
