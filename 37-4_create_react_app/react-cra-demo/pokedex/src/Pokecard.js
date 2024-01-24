import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
}

Pokecard.defaultProps = {
  id: 0,
  name: 'Default Pokemon',
  type: 'Normal',
  base_experience: 0
};

export default Pokecard;
