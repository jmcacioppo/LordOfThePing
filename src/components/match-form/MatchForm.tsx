import React, { Component } from "react";
import * as addMatchActions from "../../actions/matchActions";
import { MatchModel, GameModel } from "../../data/matches";
import TextInput from "../common/TextInput";
import { getDefaultMatch } from "../../data/repository";
import { DateFunctions } from "../../utilities/dateFunctions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const date = new Date();
const dateFunctions = new DateFunctions(date);
const quarterNumber: number = dateFunctions.getQuarter();
const weekNumber: number = dateFunctions.getWeekNumber();

class MatchForm extends Component<MatchFormProps, MatchFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      match: getDefaultMatch()
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getGameNumbers(): number[] {
    return [1, 2, 3];
  }

  handleInputChange(event: any) {
    const match = this.state.match;
    const key: string = event.target.name.split("-")[0];
    const gameIndex: number = event.target.name.split("-")[1];

    if (gameIndex) match.games[gameIndex][key] = event.target.value;
    else match[key] = event.target.value;

    this.setState({ match });
  }

  handleSubmit(event: any) {
    event.preventDefault();

    let player1Count = 0;
    let player2Count = 0;

    this.state.match.games.forEach((game: GameModel) => {
      if (game.player1Score > game.player2Score) {
        game.winner = this.state.match.player1;
        player1Count++;
      } else {
        game.winner = this.state.match.player2;
        player2Count++;
      }
    });

    if (player1Count > player2Count)
      this.state.match.winner = this.state.match.player1;
    else this.state.match.winner = this.state.match.player2;

    this.props.actions.addMatch(this.state.match);
  }

  render() {
    return (
      <form>
        <h3>
          Quarter {quarterNumber} - Week {weekNumber}
        </h3>

        <div className="FlexContainer">
          <div className="FlexItem">
            <TextInput
              label="Player 1"
              name="player1"
              value={this.state.match.player1}
              handleInputChange={this.handleInputChange}
            />
          </div>

          <div className="FlexItem">
            <TextInput
              label="Player 2"
              name="player2"
              value={this.state.match.player2}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>

        <div>
          {this.getGameNumbers().map((num, i) => {
            return (
              <div key={`newGame-${i}`}>
                Game {num}:
                <div className="FlexContainer CenterFlexRow">
                  <TextInput
                    key={`player1Score-${i}`}
                    className="FlexItem"
                    name={`player1Score-${i}`}
                    value={this.state.match.games[i].player1Score}
                    handleInputChange={this.handleInputChange}
                  />
                  <TextInput
                    key={`player2Score-${i}`}
                    className="FlexItem"
                    name={`player2Score-${i}`}
                    value={this.state.match.games[i].player2Score}
                    handleInputChange={this.handleInputChange}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <br />

        <button className="button" onClick={this.handleSubmit}>
          Submit Match
        </button>
      </form>
    );
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    matches: state.matches
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(addMatchActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchForm);

type MatchFormProps = {
  actions: any;
  quarterNumber: number;
  submitMatch: any;
  weekNumber: number;
};

type MatchFormState = { match: MatchModel };
