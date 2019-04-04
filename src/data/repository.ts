import { MatchModel } from "./matches";

export function getDefaultMatch(): MatchModel {
  return {
    id: "",
    player1: "",
    player2: "",
    games: [
      {
        id: "1",
        gameNumber: 1,
        player1Score: 0,
        player2Score: 0,
        winner: ""
      },
      {
        id: "2",
        gameNumber: 2,
        player1Score: 0,
        player2Score: 0,
        winner: ""
      },
      {
        id: "3",
        gameNumber: 3,
        player1Score: 0,
        player2Score: 0,
        winner: ""
      }
    ],
    quarterNumber: 1,
    weekNumber: 1,
    winner: ""
  };
}
