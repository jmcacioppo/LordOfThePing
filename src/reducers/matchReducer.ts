import * as types from "../actions/actionTypes";
import { MatchModel } from "../data/matches";

export default function matchReducer(state: any[] = [], action: any) {
  switch (action.type) {
    case types.ADD_MATCH:
      return [...state, Object.assign({}, action.match)];
    case types.DELETE_MATCH:
      const index = state.findIndex(
        (match: MatchModel) => match.id === action.match.id
      );
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case types.LOAD_MATCHES:
      return action.matches;
    default:
      return state;
  }
}
