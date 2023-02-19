import './styles/pokemonSearchBar.css';

import type { ChangeEvent } from 'react';
import { useState } from 'react';


const PokemonSearchBar = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className='searchBar'>
      <div>Escribe un Pokemon</div>

      <input type='text'
             value={query}
             onChange={(e: ChangeEvent<HTMLInputElement>) => {
               handleChange(e);
             }}
             placeholder='Por ejemplo: pikachu'
      />
    </div>
  );
};

export default PokemonSearchBar;
