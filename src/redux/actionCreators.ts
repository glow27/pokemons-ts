import { GET_ALL_POKEMONS, GET_ONE_POKEMON, GET_MOVE, SET_PAGE } from "./actionTypes";

const getPokemons = (pokemons: any) => ({
  type: GET_ALL_POKEMONS,
  payload: pokemons,
});

const getOnePokemon = (pokemon: any) => ({
  type: GET_ONE_POKEMON,
  payload: pokemon,
});

const getMove = (move: any) => ({
  type: GET_MOVE,
  payload: move,
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

export const downloadOnePokemon = (name: string) => {
  return async (dispatch: any) => {
    const result = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    ).json();
    dispatch(getOnePokemon(result));
  };
};

export const downloadMove = (name: string) => {
  return async (dispatch: any) => {
    const result = await (
      await fetch(`https://pokeapi.co/api/v2/move/${name}`)
    ).json();
    dispatch(getMove(result));
  };
};
