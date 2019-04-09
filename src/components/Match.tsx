import { GameModel, MatchModel } from "../data/matches";
import React from "react";

const styles = {
  Match: {
    flexGrow: 1,
    padding: "10px"
  },
  GameScore: {
    listStyleType: "none",
    padding: "2px"
  }
};

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
    <div style={styles.Match}>
      <PlayerNamesDisplay match={match} />
      <p onClick={() => props.handleDelete(match)}>x</p>
      <br /> <br />
      {match.games.map((game: GameModel) => {
        return (
          <div
            key={`match-${match.id}-game-${game.id}`}
            style={styles.GameScore}
          >
            Game {game.gameNumber}: {game.player1Score} - {game.player2Score}
          </div>
        );
      })}
    </div>
  );
};

export default Match;
