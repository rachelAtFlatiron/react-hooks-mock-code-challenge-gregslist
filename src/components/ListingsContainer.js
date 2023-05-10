import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, removeListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(el => <ListingCard removeListing={removeListing} listing={el} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
