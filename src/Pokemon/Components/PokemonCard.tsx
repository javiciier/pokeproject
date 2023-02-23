import { Pokemon } from '../Domain';
import './styles/pokemonCard.css';


interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({pokemon}: Props): JSX.Element => {

  return (
    <div className="card">
      <div className="card_header">
        <figure className="sprite">
          <img src={pokemon.sprites.front_default}
               alt={`Imagen de ${pokemon.name}`}
          />
        </figure>
      </div>

      <div className="card_title">
        <h2 className="pokemon-name">{pokemon.name}</h2>
        <h4>ID: {pokemon.id}</h4>
      </div>

      <div className="card_body">

      </div>

      <div className="card_footer">

      </div>
    </div>
  )
}


export default PokemonCard;
