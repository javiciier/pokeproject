import { Pokemon } from '../Domain';
import PokemonCard from './PokemonCard';


interface Props {
  pokemon: Nullable<Pokemon>
}

const NoPokemonResult = (): JSX.Element => <p>No se han encontrado resultados</p>

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
      : <NoPokemonResult />
  )
}


export default PokemonSearchResults;
