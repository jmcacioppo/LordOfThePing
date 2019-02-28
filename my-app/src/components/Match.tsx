import { GameModel } from '../data/matches';
import React from 'react';

const styles = {
  Match: {
    flexGrow: 1
  },
  GameScore: {
    listStyleType: 'none',
    padding: '2px'
  }
}

const Match = (props: any) => {
  const { match } = props;
  const { games } = match;
  
  return (
      <div style={styles.Match}>
        <strong>{match.player1} vs {match.player2}</strong>
        <br/> <br/>
        { 
          games.map((game: GameModel) => {
            return (
              <div key={game.id} style={styles.GameScore}>
                Game {game.id}: {game.score}
              </div>
            )
          })
        }
      </div>
  );
}

export default Match;