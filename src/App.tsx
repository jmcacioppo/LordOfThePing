import "./App.css";
import * as addMatchActions from "./actions/matchActions";
import MatchList from "./components/MatchList";
import { MatchModel } from "./data/matches";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
  }

  deleteMatch = (match: MatchModel) => this.props.actions.deleteMatch(match);

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Main />

          <MatchList
            deleteMatch={this.deleteMatch.bind(this)}
            matches={this.props.matches}
          />
        </div>
      </BrowserRouter>
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
)(App);

type AppProps = { matches: MatchModel[]; actions: any };
type AppState = { viewForm: boolean };
