import { useEffect, useState } from 'react';
import PokemonSearchInput from './PokemonSearchInput';
import PokemonSearchResults from './PokemonSearchResults';
import { pokemonService as service } from '../Application';
import { Pokemon } from '../Domain';

const PokemonSearch = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<Nullable<Error>>(null);
  const [pokemon, setPokemon] = useState<Nullable<Pokemon>>(null);

  /** Recupera la consulta de la barra de búsqueda */
  const handleQueryChange = async (input: string): Promise<void> => {
    setQuery(input);

    try {
      let pokemon: Pokemon = await service.getPokemon(input);
      setPokemon(pokemon);
    } catch (err) {
      if (err instanceof Error)
      setError(err);
      setPokemon(null);
    }
  };


  useEffect(() => {
    console.log(`Query value: \'${query}\'`);
  }, [query])

  return (
    <div>
      <PokemonSearchInput onInputCallback={handleQueryChange} />
      <PokemonSearchResults pokemon={pokemon}/>
    </div>
  );
};

export default PokemonSearch;
