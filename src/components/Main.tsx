import React from "react";
import { Switch, Route } from "react-router-dom";
import MatchForm from "./MatchForm";
import Leaderboard from "./Leaderboard";
import Something from "./Something";

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
