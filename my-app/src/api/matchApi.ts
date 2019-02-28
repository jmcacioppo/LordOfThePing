import matches, { MatchModel } from '../data/matches';

export default class MatchAPI {
  static getAllMatches(): Promise<MatchModel[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], matches));
      }, 1000);
    })
  }
  
  static saveMatch(matchToSave: MatchModel): Promise<MatchModel[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let indexOfCurrentMatch: number;
        if(indexOfCurrentMatch = matches.findIndex((match: MatchModel) => match.id === matchToSave.id)) {
          matches.splice(indexOfCurrentMatch, 1, matchToSave);
          resolve(matches);
        }
        else {
          resolve([...matches, Object.assign({}, matchToSave)]);
        }
      }, 1000);
    });
  }

  static deleteMatch(matchToDelete: MatchModel): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = matches.findIndex((match: MatchModel) => match.id === matchToDelete.id);
        matches.splice(index, 1);
        resolve();
      }, 1000);
    });
  }
}