import { GET_ALL_POKEMONS, SET_PAGE } from "./actionTypes";

const getPokemons = (pokemons: any) => ({
  type: GET_ALL_POKEMONS,
  payload: pokemons,
});

export const setPage = (page: any) => ({
  type: SET_PAGE,
  payload: page,
});

export const downloadPokemons = () => {
  return async (dispatch: any) => {
    const result = await (
      await fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
    ).json();
    dispatch(getPokemons(result));
  };
};
