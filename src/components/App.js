import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import listings from "../data";

function App() {
  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
