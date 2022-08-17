import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  //listings = [{listing}, {listing}, {listing}]
  //.map listings = [<ListingCard listing={el}/>, <ListingCard listing={el} />, <ListingCard listing={el}/>]
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
