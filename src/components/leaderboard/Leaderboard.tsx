import React from "react";
import * as addMatchActions from "../../actions/matchActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MatchList from "./MatchList";
import { MatchModel } from "../../data/matches";

const Leaderboard = (props: LeaderboardProps) => {
  const deleteMatch = (match: MatchModel) => props.actions.deleteMatch(match);

  return (
    <section>
      Leaderboard
      <MatchList deleteMatch={deleteMatch} matches={props.matches} />
    </section>
  );
};

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
)(Leaderboard);

type LeaderboardProps = { matches: MatchModel[]; actions: any };
