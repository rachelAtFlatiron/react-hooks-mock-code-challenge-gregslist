import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  const url = "http://localhost:6001/listings"
  const newListing = { image: '', description: '', location: ''}
  const [ search, setSearch ] = useState('')
  const [ listings, setListings ] = useState([])
  const [ formListing, setFormListing ] = useState({...newListing})
  const [displayedListings, setDisplayedListings] = useState([])

  const getListings = async function(){
    let res = await fetch(url)
    let data = await res.json()
    setListings(data)
    setDisplayedListings(data)
  }

  const deleteListing = async function(id){
    let res = await fetch(`${url}/${id}`, {method: 'DELETE'})
    let data = await res.json()
    setListings(listings.filter(el => el.id !== id))
  }

  const addListing = async function(e){
    e.preventDefault()
    let options = {method: 'POST', body: JSON.stringify(formListing), headers: { 'Content-Type': 'application/json '}}
    let res = await fetch(url, options)
    let data = await res.json();
    setFormListing({...newListing})
    setListings([...listings, data])
  }

  const submitSearch = function(e){
    e.preventDefault();
    setDisplayedListings(listings.filter(el => el.description.toLowerCase().includes(search.toLowerCase())))
  }

  const changeSearch = function(e){
    setSearch(e.target.value)
  }

  const changeNewListing = function(e){
    setFormListing({...formListing, [e.target.name]: e.target.value})
  }

  useEffect(() => getListings(), [])
  return (
    <div className="app">
      <Header search={search} changeSearch={changeSearch} submitSearch={submitSearch} />
      <ListingForm formListing={formListing} handleChange={changeNewListing} handleSubmit={addListing} />
      <ListingsContainer listings={displayedListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
