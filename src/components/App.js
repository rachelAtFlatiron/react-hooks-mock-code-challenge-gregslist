import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  return (
    <div className="app">
      <Header />
      <ListingForm />
      <ListingsContainer />
    </div>
  );
}

export default App;
