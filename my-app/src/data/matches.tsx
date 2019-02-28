export interface MatchModel {
    id: string,
    player1: string,
    player2: string,
    games: GameModel[],
    quarterNumber: number,
    weekNumber: number,
    [key: string]: string | number | GameModel[] | any;
}

export interface GameModel {
    id: string,
    score: string,
    winner: string;
}

const matches: MatchModel[] = [
    {
        id: '1',
        player1: 'Joseph',
        player2: 'Josh',
        games: [
            {
                id: '1',
                score: '11-9',
                winner: 'Joseph'
            },
            {
                id: '2',
                score: '8-11',
                winner: 'Josh'
            },
            {
                id: '3',
                score: '12-10',
                winner: 'Joseph'
            }
        ],
        quarterNumber: 1,
        weekNumber: 1
    },
    {
        id: '2',
        player1: 'Joseph',
        player2: 'Jordan',
        games: [
            {
                id: '1',
                score: '5-11',
                winner: 'Jordan'
            },
            {
                id: '2',
                score: '11-4',
                winner: 'Joseph'
            },
            {
                id: '3',
                score: '15-13',
                winner: 'Joseph'
            }
        ],
        quarterNumber: 1,
        weekNumber: 1
    },
    {
        id: '3',
        player1: 'Joseph',
        player2: 'Kristen',
        games: [
            {
                id: '1',
                score: '8-11',
                winner: 'Kristen'
            },
            {
                id: '2',
                score: '11-8',
                winner: 'Joseph'
            },
            {
                id: '3',
                score: '12-14',
                winner: 'Kristen'
            },
            {
                id: '4',
                score: '15-13',
                winner: 'Joseph'
            },
            {
                id: '5',
                score: '11-2',
                winner: 'Joseph'
            }
        ],
        quarterNumber: 1,
        weekNumber: 1
    }
]

export default matches;