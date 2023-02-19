const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

export const getPokemon = async (name: string = '', onSuccess: CallbackFunction): Promise<void> => {
  const endpoint: string = `${API_ENDPOINT}/pokemon/${name}`;

  try {
    const response = await fetch(endpoint, { method: 'GET' });
    const data = await response.json();

    onSuccess(data);
  } catch (err) {
    throw new Error('Error fetching pokemon by name');
  }
}
