import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {
          /*
          [ {id: 1, description: 'sldkfj', location: 'sdlkfj', image: ''}, {...}, {...}, ...]

          =>

            [<ListingCard ... />, <ListingCard .../>, <ListingCard .../>, ...]
          */
        }
        {
          listings.map(el => <ListingCard deleteListing={deleteListing} key={el.id} listing={el} />)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
