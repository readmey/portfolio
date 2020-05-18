import React from "react";
import "./App.scss";

import Portfolio from "./pages/portfolio";
import PositionTitle from "./components/PositionTitle";

function App() {
  return (
    <div className="App">
      <header></header>
      <PositionTitle title="MY TRANG HONG" />
      <Portfolio />
    </div>
  );
}

export default App;
