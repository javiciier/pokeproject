import { Pokemon } from '../Domain';
import PokemonCard from './PokemonCard';
import { NoResults, Spinner } from 'Common';

interface Props {
  isLoading: boolean;
  pokemon: Nullable<Pokemon>
}

const PokemonResult = ({pokemon}: Props): JSX.Element => {
  return (
    <PokemonCard pokemon={pokemon!} />
  )
}

const PokemonSearchResults = ({pokemon, isLoading = false}: Props) : JSX.Element => {
  const hasFoundPokemon = pokemon !== null;


  if (isLoading) return <Spinner />

  return (
    (hasFoundPokemon) ?
      <PokemonResult pokemon={pokemon} isLoading />
      : <NoResults />
  )
}


export default PokemonSearchResults;
