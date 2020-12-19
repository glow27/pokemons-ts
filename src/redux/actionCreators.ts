import {
  GET_ALL_POKEMONS,
  SET_PAGE,
  PokemonType,
  GetPokemonsType,
  SetPageType,
} from "./actionTypes";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./reducer";

const getPokemons = (pokemons: PokemonType[]): GetPokemonsType => ({
  type: GET_ALL_POKEMONS,
  payload: pokemons,
});

export const setPage = (page: number): SetPageType => ({
  type: SET_PAGE,
  payload: page,
});

export const downloadPokemons = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => {
  return async (dispatch) => {
    const data = await (
      await fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
    ).json();
    dispatch(getPokemons(data.results));
  };
};
