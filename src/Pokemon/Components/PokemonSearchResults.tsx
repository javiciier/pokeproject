import { Pokemon } from '../Domain';
import PokemonCard from './PokemonCard';
import { NoResults } from 'Common';


interface Props {
  pokemon: Nullable<Pokemon>
}

const PokemonResult = ({pokemon}: Props): JSX.Element => {
  return (
    <PokemonCard pokemon={pokemon!} />
  )
}

const PokemonSearchResults = ({pokemon}: Props) : JSX.Element => {
  const hasFoundPokemon = pokemon !== null;

  return (
    (hasFoundPokemon) ?
      <PokemonResult pokemon={pokemon} />
      : <NoResults />
  )
}


export default PokemonSearchResults;
