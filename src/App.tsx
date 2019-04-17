import "./styles/App.css";
import "./styles/Flexbox.css";
import "./styles/Navbar.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as addMatchActions from "./actions/matchActions";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { MatchModel } from "./data/matches";

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
