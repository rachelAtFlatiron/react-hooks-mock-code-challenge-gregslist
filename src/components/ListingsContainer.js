import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  
  return (
    <main>

      <ul className="cards">
        {
          listings.map(el => <ListingCard deleteListing={deleteListing} listing={el} />)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
