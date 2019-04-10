import React from "react";

const Navbar = (props: any) => {
  return (
    <nav>
      <header className="App-header">Lord of the Ping</header>

      <div className="NavItemsContainer FlexContainer">
        <div className="FlexItem">Enter Game</div>
        <div className="FlexItem">Leaderboard</div>
        <div className="FlexItem">Something</div>
      </div>
    </nav>
  );
};

export default Navbar;
