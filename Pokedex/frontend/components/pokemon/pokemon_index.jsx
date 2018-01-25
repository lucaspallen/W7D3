import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    return (
      <ul>
        {
          this.props.allPokemon.map(
          (pokemon) => {
            return <li key={Object.keys(pokemon)[0]}>{pokemon[Object.keys(pokemon)[0]].name}</li>;
          }
        )}
      </ul>
    );
  }
}

export default PokemonIndex;
