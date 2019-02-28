import * as types from './actionTypes'
import { MatchModel } from "../data/matches";
import MatchAPI from '../api/matchApi';

export function addMatch(match: MatchModel) {
  return { type: types.ADD_MATCH, match }
}

export function loadMatches(matches: MatchModel[]) {
  return { type: types.LOAD_MATCHES, matches }
}

export function getAllMatches(): any {
  return function(dispatch: any) {
    return MatchAPI.getAllMatches()
      .then((matches: MatchModel[]) => {
        dispatch(loadMatches(matches));
      })
      .catch((error: any) => {
        throw(error);
      });
  }
}