import PokemonSearchInput from './PokemonSearchInput';
import { useState } from 'react';

const PokemonSearch = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  /** Recupera la consulta de la barra de búsqueda */
  const handleQueryChange = (q: string): void => {
    setQuery(q);
  };


  return (
    <div>
      <PokemonSearchInput onInputCallback={handleQueryChange} />

    </div>
  );
};

export default PokemonSearch;
