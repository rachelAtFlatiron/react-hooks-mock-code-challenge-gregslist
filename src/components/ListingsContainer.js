import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteItem }) {

  
  return (
    <main>
      <ul className="cards">
        {
          listings.map(item => <ListingCard deleteItem={deleteItem} item={item} key={item.id} />)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
