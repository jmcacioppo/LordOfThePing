import React, { Component } from 'react';
import { MatchModel } from '../data/matches';
import TextInput from './common/TextInput';

class MatchForm extends Component<MatchFormProps, MatchFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      match: {
        id: '',
        player1: '',
        player2: '',
        games: [],
        quarterNumber: props.quarterNumber,
        weekNumber: props.weekNumber
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGameNumbers(): number[] {
    return [1, 2, 3, 4, 5];
  }

  handleInputChange(event: any) {
    const match = this.state.match;
    const key: string = event.target.name.split('-')[0];
    
    if(Array.isArray(match[key])) match[key][event.target.name.split('-')[1]] = event.target.value;
    else match[key] = event.target.value;

    this.setState(({ match }));
  }

  handleSubmit() {
    console.log(this.state.match);
    this.props.submitMatch(this.state.match);
  }

  render() {
    return (
      <form>
        <TextInput label="Player 1" name="player1" value={this.state.match.player1} handleInputChange={this.handleInputChange} />
        <TextInput label="Player 2" name="player2" value={this.state.match.player2} handleInputChange={this.handleInputChange} />
        
        {
          this.getGameNumbers().map((gameNumber: number) => {
            return <TextInput key={gameNumber} label={`Game ${gameNumber}`} name={`games-${gameNumber-1}`} value={this.state.match.games[gameNumber-1]} handleInputChange={this.handleInputChange} />
          })
        }

        <br/>

        <button className="button" onClick={this.handleSubmit}>Submit Match</button>
      </form>
    )
  }
};

export default MatchForm;

type MatchFormProps = { quarterNumber: number, weekNumber: number, submitMatch: any };
type MatchFormState = { match: MatchModel }