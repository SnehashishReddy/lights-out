import React from "react";
import Board from "./Board";

const App = () => {
  return (
    <div className="App">
      <div>
        <Board nrows={4} ncols={9} chanceIsLit={0.25} />
      </div>
    </div>
  );
};

export default App;
