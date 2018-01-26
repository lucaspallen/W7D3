import React from 'react';
import { withRouter } from 'react-router-dom';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      image_url: "",
      poke_type: ""
    };
    this.update = this.update.bind(this);
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon({
      pokemon: {
        attack: this.state.attack,
        name: this.state.name,
        defense: this.state.defense,
        image_url: this.state.image_url,
        poke_type: this.state.poke_type
      }
    }).then((newPokemon) => {
      this.props.history.push(`pokemon/${newPokemon.id}`);
    });

  }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" onChange={this.update("name")}></input>
        <label htmlFor="attack">Attack</label>
        <input id="attack" type="text" onChange={this.update("attack")}></input>
        <label htmlFor="defense">Defense</label>
        <input id="defense" type="text" onChange={this.update("defense")}></input>
        <label htmlFor="image_url">Image URL</label>
        <input id="image_url" type="text" onChange={this.update("image_url")}></input>
        <label htmlFor="poke_type">Type</label>
        <input id="poke_type" type="text" onChange={this.update("poke_type")}></input>

        <input type="submit" value="Create Pokemon!!!" />
      </form>
    );
  }
}

export default withRouter(PokemonForm);
