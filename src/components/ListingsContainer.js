import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        console.error('oh no')
      }
    })
    .then(data => setListings(data))
  }, [])

  const filteredListings = listings.filter(item => {
    //convert everything to lowercase
    //ask if search is in item description 
    const lowerSearch = search.toLowerCase()
    const lowerItem = item.description.toLowerCase()
    if(lowerItem.includes(lowerSearch)){
      return true
    } else {
      return false
    }
    //return item.description.toLowerCase().includes(search.toLowerCase())
  })
  const deleteItem = (id) => {
    //filter item out of state 
    setListings(listings.filter(item => {
      //if current item does not have matching id
      //keep current item
      if(item.id !== id){
        return true 
      } else {
        return false
      }
      //return item.id !== id
    }))
  }
  
  return (
    <main>
      <ul className="cards">
        {
          filteredListings.map(item => <ListingCard deleteItem={deleteItem} item={item} key={item.id} />)
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
