import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListing from "./NewListing";

function App() {
	const url = "http://localhost:6001/listings";
	const [listings, setListings] = useState([]);
  const [search, setSearch] = useState('')
  //GET and POST don't need ids in url
	useEffect(() => {
		fetch(`${url}`)
			.then((res) => res.json())
			.then((data) => setListings(data));
		//empty dependency array says to run the useEffect once on first render
	}, []);

  const updateSearch = (newSearch) => {
    setSearch(newSearch)
  }

  const addListing = (newListing) => {
    setListings([...listings, newListing])
  }

	const deleteListing = (id) => {
		setListings(
			listings.filter((el) => {
				if (el.id === id) {
					return false;
				}
				return true;
			})
		);
	};

  //we only want to run this code when we setSearch
  //setSearch causes a re-render which will re-run all the code 
  //including filteredListings
  const filteredListings = listings.filter(el => {
    //compare search with el.description
    //make sure to lowercase everything
    //check if el.description contains search
    if(el.description.toLowerCase().includes(search.toLowerCase())){
      return true 
    }
    return false
  })

	return (
		<div className="app">
			<Header updateSearch={updateSearch} />
      <NewListing addListing={addListing} />
			<ListingsContainer deleteListing={deleteListing} listings={filteredListings} />
		</div>
	);
}

export default App;
