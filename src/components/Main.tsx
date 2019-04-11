import React from "react";
import { Switch, Route } from "react-router-dom";
import MatchForm from "./match-form/MatchForm";
import Leaderboard from "./leaderboard/Leaderboard";
import Something from "./something/Something";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={MatchForm} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/something" component={Something} />
    </Switch>
  </main>
);

export default Main;
