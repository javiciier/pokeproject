import './styles/body.css';
import { PokemonSearch } from '../Pokemon';

const Body = (): JSX.Element => {

  return (
    <div className='body'>
      <PokemonSearch />
    </div>
  );
};

export default Body;
