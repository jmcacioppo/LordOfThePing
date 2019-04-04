export interface MatchModel {
  id: string;
  player1: string;
  player2: string;
  games: GameModel[];
  quarterNumber: number;
  weekNumber: number;
  winner: string;
  [key: string]: string | number | GameModel[] | any;
}

export interface GameModel {
  id: string;
  gameNumber: number;
  player1Score: number;
  player2Score: number;
  winner: string;
  [key: string]: string | number;
}

const matches: MatchModel[] = [
  {
    id: "1",
    player1: "Joseph",
    player2: "Josh",
    games: [
      {
        id: "1",
        gameNumber: 1,
        player1Score: 11,
        player2Score: 9,
        winner: "Joseph"
      },
      {
        id: "2",
        gameNumber: 2,
        player1Score: 8,
        player2Score: 11,
        winner: "Josh"
      },
      {
        id: "3",
        gameNumber: 3,
        player1Score: 12,
        player2Score: 10,
        winner: "Joseph"
      }
    ],
    quarterNumber: 1,
    weekNumber: 1,
    winner: "Joseph"
  },
  {
    id: "2",
    player1: "Joseph",
    player2: "Jordan",
    games: [
      {
        id: "1",
        gameNumber: 1,
        player1Score: 11,
        player2Score: 9,
        winner: "Joseph"
      },
      {
        id: "2",
        gameNumber: 2,
        player1Score: 8,
        player2Score: 11,
        winner: "Jordan"
      },
      {
        id: "3",
        gameNumber: 3,
        player1Score: 12,
        player2Score: 10,
        winner: "Joseph"
      }
    ],
    quarterNumber: 1,
    weekNumber: 1,
    winner: "Joseph"
  },
  {
    id: "3",
    player1: "Joseph",
    player2: "Kristen",
    games: [
      {
        id: "1",
        gameNumber: 1,
        player1Score: 11,
        player2Score: 9,
        winner: "Joseph"
      },
      {
        id: "2",
        gameNumber: 2,
        player1Score: 8,
        player2Score: 11,
        winner: "Kristen"
      },
      {
        id: "3",
        gameNumber: 3,
        player1Score: 12,
        player2Score: 10,
        winner: "Joseph"
      }
    ],
    quarterNumber: 1,
    weekNumber: 1,
    winner: "Joseph"
  }
];

export default matches;
