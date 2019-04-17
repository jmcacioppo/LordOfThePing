import "./Match.css";
import { GameModel, MatchModel } from "../../data/matches";
import React from "react";

const PlayerNamesDisplay = (data: { match: MatchModel }) => {
  const match: MatchModel = data.match;

  return match.winner === match.player1 ? (
    <strong>
      <span className="winner">{match.player1}</span> vs {match.player2}
    </strong>
  ) : (
    <strong>
      {match.player1} vs <span className="winner">{match.player2}</span>
    </strong>
  );
};

const Match = (props: any) => {
  const { match } = props;

  return (
    <div className="Match">
      <PlayerNamesDisplay match={match} />
      <button onClick={() => props.handleDelete(match)}>x</button>
      <br /> <br />
      {match.games.map((game: GameModel) => {
        return (
          <div key={`match-${match.id}-game-${game.id}`} className="GameScore">
            Game {game.gameNumber}: {game.player1Score} - {game.player2Score}
          </div>
        );
      })}
    </div>
  );
};

export default Match;
