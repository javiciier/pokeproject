import { Pokemon } from '../Domain';

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({pokemon}: Props): JSX.Element => {


  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  )
}


export default PokemonCard;
