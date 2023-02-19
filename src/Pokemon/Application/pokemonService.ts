import { Pokemon } from '../Domain';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

export const getPokemon = async (name: string = ''): Promise<Pokemon> => {
  const endpoint: string = `${API_ENDPOINT}/pokemon/${name}`;
  let pokemon: Pokemon;

  try {
    const response = await fetch(endpoint, { method: 'GET' });
    // En caso de error, parsea la respuesta y la devuelve
    const data = await response.text();
    pokemon = JSON.parse(data);
  } catch (err) {
    throw err;
  }

  return pokemon;
}
