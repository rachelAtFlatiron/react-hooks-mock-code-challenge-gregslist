import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const url = "http://localhost:6001/listings"
  const newListing = { image: '', description: '', location: ''}
  const [ search, setSearch ] = useState('')
  const [ listings, setListings ] = useState([])

  const getListings = async function(){
    let res = await fetch(url)
    let data = await res.json()
    setListings(data)
  }

  const deleteListing = async function(id){
    let res = await fetch(`${url}/${id}`, {method: 'DELETE'})
    let data = await res.json()
    setListings(listings.filter(el => el.id !== id))
  }

  const changeSearch = function(e){
    setSearch(e.target.value)
  }

  useEffect(() => getListings(), [])
  const displayedListings = listings.filter(el => el.description.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="app">
      <Header search={search} changeSearch={changeSearch} />
      <ListingsContainer listings={displayedListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
