import "./MatchList.css";
import React from "react";
import Match from "./Match";
import { MatchModel } from "../../data/matches";

const MatchList = (props: any) => {
  return (
    <div className="MatchList">
      {props.matches.map((match: MatchModel) => (
        <Match
          handleDelete={handleDelete}
          key={`match-${match.id}`}
          match={match}
        />
      ))}
    </div>
  );

  function handleDelete(match: MatchModel) {
    props.deleteMatch(match);
  }
};

export default MatchList;
