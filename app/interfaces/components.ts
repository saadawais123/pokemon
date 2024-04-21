// types.ts
export interface IPokemonList {
  pokemon: IPokemon;
}
interface IPokemon {
  name: string;
  url: string;
}
export interface Category {
  url: string;
  name: string;
}

export interface Stat {
  base_stat: number;
}

export interface IPokemonDetails {
  name: string;
  stats: Stat[];
  sprites: IPokemonSprite;
}

interface IPokemonSprite {
  front_default: string;
}
