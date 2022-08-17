import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const [fave, setFave] = useState(false)

  const handleClick = function(){
    setFave(prev => !prev)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fave ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={() => deleteListing(listing.id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
