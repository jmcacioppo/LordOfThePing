import * as types from '../actions/actionTypes'

export default function matchReducer(state: any[] = [], action: any) {
  switch(action.type) {
    case types.ADD_MATCH:
      return [...state, Object.assign({}, action.match)];
    case types.LOAD_MATCHES:
      return action.matches;
    default:
      return state;
  }
}