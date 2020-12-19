import {
  GET_ALL_POKEMONS,
  SET_PAGE,
  PokemonType,
  GetPokemonsType,
  SetPageType,
} from "./actionTypes";

type ReducerType = {
  list: PokemonType[];
  page: number;
};

type ReducerActionTypes = GetPokemonsType | SetPageType;

const initialState: ReducerType = { list: [], page: 0 };

export function reducer(
  state = initialState,
  action: ReducerActionTypes
): ReducerType {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return { ...state, list: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof reducer>;
