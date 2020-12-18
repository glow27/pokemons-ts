import {
  GET_ALL_POKEMONS,
  GET_ONE_POKEMON,
  GET_MOVE,
  SET_PAGE,
} from './actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (
  state = { list: [], current: {}, move: {}, page: 0 },
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return { ...state, list: action.payload };
    case GET_ONE_POKEMON:
      return { ...state, current: action.payload };
    case GET_MOVE:
      return { ...state, move: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
