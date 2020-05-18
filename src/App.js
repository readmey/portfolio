import React from "react";
import "./App.scss";

import data from "./data/data.json";

import Portfolio from "./pages/portfolio";
import PositionTitle from "./components/PositionTitle";
import ContactDetails from "./components/ContactDetails";

console.log(data);
function App() {
  return (
    <div className="App">
      <header>
        <ContactDetails contact={data.contactDetails} />
      </header>
      <PositionTitle title="MY TRANG HONG" />
      <Portfolio data={data} />
    </div>
  );
}

export default App;
