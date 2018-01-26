import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <li>
      <Link to={`/pokemon/${props.pokemon.id}`} >
        <img className="poke-img" src={props.pokemon.image_url} />
        {props.pokemon.name}

      </Link>
    </li>
  );
};
