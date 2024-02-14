import React from "react";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  const [pokemon, fetchData] = useAxios('https://pokeapi.co/api/v2/pokemon/');

  const addPokemon = async name => {
    await fetchData(name);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(pokemonData => (
          <PokemonCard
            key={pokemonData.id}
            front={pokemonData.sprites.front_default}
            back={pokemonData.sprites.back_default}
            name={pokemonData.name}
            stats={pokemonData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
