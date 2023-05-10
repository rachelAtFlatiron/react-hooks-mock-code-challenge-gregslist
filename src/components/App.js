import { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";

function App() {
  //reflect what is in the backend
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
    getListings()
  }, [])

  function updateSearch(newSearch){
    setSearch(newSearch)
  }

  function getListings(){
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => setListings(data))
  }

  function toggleSort(){
    setSorted(prev => !prev)
  }

  //id is the listing's id
  //you are welcome to pass in the whole listing
  //but technically only the id is necessary
  function removeListing(id){
    //remove listing with id 'id'
    setListings([...listings].filter(el => {
      // return el.id !== id

      //return el.id === id ? false : true

      if(el.id === id){
        return false 
      } else {
        return true
      }
    }))
  }

  function addListing(listing){
    setListings([...listings, listing])
  }

  const filterListings = [...listings].filter(el => {
    if (el.description.toLowerCase().includes(search.toLowerCase())){
      return true
    } else {
      return false
    }
  })
  //set sort listings to filterListings in case we need to sort alpha
  let sortListings = filterListings 

  //if sorted is true, sort listing by location
  if(sorted){
    sortListings = filterListings.sort((a, b) => {
      //BY LOCATION
      return a.location.localeCompare(b.location)
    })
  } 

  return (
    <div className="app">
      <Header updateSearch={updateSearch} />
      <div>
        <button onClick={() => toggleSort()}>{sorted ? 'Unsorted' : 'Location: A-Z' }</button>
      </div>
      <ListingForm addListing={addListing} />
      <ListingsContainer removeListing={removeListing} listings={sortListings} />
    </div>
  );
}

export default App;
