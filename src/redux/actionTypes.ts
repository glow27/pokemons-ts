export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const SET_PAGE = "SET_PAGE";

export type PokemonType = {
  name: string;
  url: string;
};

export type GetPokemonsType = {
  type: typeof GET_ALL_POKEMONS;
  payload: PokemonType[];
};

export type SetPageType = {
  type: typeof SET_PAGE;
  payload: number;
};
