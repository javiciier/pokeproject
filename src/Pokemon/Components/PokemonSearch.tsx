import { useState } from 'react';
import PokemonSearchInput from './PokemonSearchInput';
import PokemonSearchResults from './PokemonSearchResults';
import { pokemonService as service } from '../Application';
import { Pokemon } from '../Domain';
import './styles/pokemonSearch.css';

const PokemonSearch = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [error, setError] = useState<Nullable<Error>>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<Nullable<Pokemon>>(null);

  /** Recupera la consulta de la barra de búsqueda */
  const handleQueryChange = async (input: string): Promise<void> => {
    if (input === '') {
      setError(new Error('Escribe un pokemon'));

      return;
    }
    setQuery(input);

    try {
      setLoading(true);
      let pokemon: Pokemon = await service.getPokemon(input.trim());
      setPokemon(pokemon);
    } catch (err) {
      setPokemon(null);
      if (err instanceof Error) {
        setError(err);
      }
    }
    finally {
      setLoading(false);
    }
  };


  return (
    <div className="pokemonSearch">
      <PokemonSearchInput onInputCallback={handleQueryChange} />
      <PokemonSearchResults pokemon={pokemon} isLoading={isLoading}/>
    </div>
  );
};

export default PokemonSearch;
