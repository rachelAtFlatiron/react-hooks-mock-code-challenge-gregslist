import { useState } from "react";

function ListingCard({ listing, removeListing }) {
  const [fave, setFave] = useState(false)

  function toggleFave() {
    setFave(prev => !prev)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {removeListing(listing.id)})
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {fave ? (
          <button onClick={toggleFave} className="emoji-button favorite active">★</button>
        ) : (
          <button  onClick={toggleFave} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={() => handleDelete()} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
