import { GET_ALL_POKEMONS, SET_PAGE } from "./actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  state = { list: [], page: 0 },
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return { ...state, list: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
