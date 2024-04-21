import axios from "axios";

export const getPokemonCategories = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type");
  return response.data.results;
};

export const getPokemonListByCategoryId = async (type: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

  return response.data.pokemon;
};

export const getPokemonDetailsByName = async (name: string) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
};

// Add other API functions as needed
