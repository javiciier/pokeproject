import './styles/pokemonSearchInput.css';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';


interface Props {
  onInputCallback: CallbackFunction;
}

const PokemonSearchInput = ({ onInputCallback }: Props): JSX.Element => {
  const [searchInput, setSearchInput] = useState<string>('');


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onInputCallback(searchInput); /* Indica al padre que ha cambiado el input */
  };

  return (
    <div className='wrapper'>
      <label htmlFor='search'>
        Busca un Pokemon
      </label>
      <form role='search' onSubmit={handleSubmit}>
        <input type='text'
          id='search'
          value={searchInput}
          placeholder='Escribe un Pokemon'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          }}
        />

        <button type='submit'>BUSCAR</button>
      </form>
    </div>
  );
};

export default PokemonSearchInput;
