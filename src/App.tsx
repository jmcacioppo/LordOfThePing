import './App.css';
import * as addMatchActions from './actions/matchActions';
import MatchList from './components/MatchList';
import MatchForm from './components/MatchForm';
import { MatchModel } from './data/matches';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateFunctions } from './utilities/dateFunctions';

const date = new Date();
const dateFunctions = new DateFunctions(date);
const quarterNumber: number = dateFunctions.getQuarter();
const weekNumber: number = dateFunctions.getWeekNumber();

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = { viewForm: false };
    this.submitMatch.bind(this);
  }

  addMatch = () => this.setState({ viewForm: true });

  submitMatch = (match: MatchModel) => {
    this.props.actions.addMatch(match);
    this.setState({ viewForm: false });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">Lord of the Ping</header>

        <h3>Quarter {quarterNumber} - Week {weekNumber}</h3>        
        <MatchList matches={this.props.matches}/>
        <button className="button" onClick={this.addMatch.bind(this)}>Add Match</button>

        <br/>

        { (this.state.viewForm) ? <MatchForm quarterNumber={quarterNumber} weekNumber={weekNumber} submitMatch={this.submitMatch} /> : '' }
      </div>
    );
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    matches: state.matches
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(addMatchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

type AppProps = { matches: MatchModel[], actions: any };
type AppState = { viewForm: boolean }