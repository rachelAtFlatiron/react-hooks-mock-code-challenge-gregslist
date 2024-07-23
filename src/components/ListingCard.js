import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const [favorite, setFavorite] = useState(false)

  const toggleFavorite = () => {
    //set favorite to its opposite value 
    //need previous version of state to know what to change it to
    setFavorite(prev => !prev)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        deleteListing(listing.id)
      } else {
        throw Error('delete went wrong')
      }
    })
    .catch(err => console.error('couldnt reach server'))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={toggleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
