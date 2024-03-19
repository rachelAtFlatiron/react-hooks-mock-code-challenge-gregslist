import React, { useState } from "react";

//event (click)
//we need something to update over time (the button)
//thing to update (toggle): flip between true/false

function ListingCard({ item, deleteItem }) {

  const [favorite, setFavorite] = useState(false)

  const handleClick = () => {
    //toggle favorite
    //next state relies on previous states value
    //therefore: use callback 
    setFavorite(prev => !prev)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.error('sad')
      }
    })
    //deleteItem if DELETE request was successful
    .then(() => deleteItem(item.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
