import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {

  const url = "http://localhost:6001/listings"
  const newListing = { image: '', description: '', location: ''}

  //state for all listings
  const [ allListings, setListings ] = useState([])
  const [ formListing, setFormListing ] = useState({...newListing})
  //state for displayed listings based on search: setSearchedListings
  const [displayedListings, setDisplayedListings] = useState([])

  //get all listings
  const getListings = async function(){
    let res = await fetch(url)
    let data = await res.json()
    setListings(data) //all listings from db
    setDisplayedListings(data) //initial cards displayed on page

    /*
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setListings(data)
      setDisplayedListings(data)
    })
    */
  }

  const deleteListing = async function(id){
    //ex. localhost:6001/listings/3
    let res = await fetch(`${url}/${id}`, {method: 'DELETE'})
    let data = await res.json()
    setListings(allListings.filter(el => el.id !== id))
    setDisplayedListings(displayedListings.filter(el => el.id !== id))
  }

  const addListing = async function(e){
    e.preventDefault()
    let options = {method: 'POST', body: JSON.stringify(formListing), headers: { 'Content-Type': 'application/json '}}
    let res = await fetch(url, options)
    let data = await res.json();
    setFormListing({...newListing})
    setListings([...allListings, data])
  }

 
  //represents search value in Search.js
  const [ search, setSearch ] = useState('')

  //triggered onChange in Search.js
  const changeSearch = function(e){
    setSearch(e.target.value)
  }

  //triggered onSubmit in Search.js
  const submitSearch = function(e){
    e.preventDefault();
    setDisplayedListings(allListings.filter(el => 
      el.description.toLowerCase().includes(search.toLowerCase())
    ))
  }

  const changeNewListing = function(e){
    setFormListing({...formListing, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    console.log('use effect')
    getListings()
    console.log('sldkfj')
    /*
      fetch(url)
      .then
      .then
    */
  }, [])

  return (
    <div className="app">
      <Header search={search} changeSearch={changeSearch} submitSearch={submitSearch} />
      {/* <ListingForm formListing={formListing} handleChange={changeNewListing} handleSubmit={addListing} /> */}
      <ListingsContainer listings={displayedListings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
