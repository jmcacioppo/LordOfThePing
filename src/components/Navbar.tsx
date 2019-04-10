import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  return (
    <header>
      <div className="App-header">Lord of the Ping</div>

      <nav className="NavItemsContainer FlexContainer">
        <div className="FlexItem">
          <Link to="/">Enter Game</Link>
        </div>
        <div className="FlexItem">
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        <div className="FlexItem">
          <Link to="/something">Something</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
