import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ListingForm from "./ListingForm";
/* Deliverable #1

1. created state and used fetch/useEffect to populate state with data
2. iterate over data and make a card per each item
***including passing down and using props, initializing state, etc.
*/

/* Deliverable #2 - events

state -> view -> event -> state -> ...

1. create state (favorite)
2. incorporates state into JSX
3. a.create event handler that affects state
   b. attach event handler to event listener

*/


/* Deliverable #3 - delete (inverse data flow)
~~~~~~~only way to send info from child to parent is with cb~~~~~~~~~
1. create function to delete item
2. pass said function down as prop/callback to each card
3. a. create event in each card
   b. make DELETE request
   c. trigger cb pessimisticly 
*/

/* Deliverable #4 - search/filter (lifting state)

1. create search state in closest common ancestor (App)
2. pass down ability to update state to Search
3. handle the controlled component part

4. pass down search state to ListingsContainer
5. make use of search state to filter
*/
function App() {
  const [search, setSearch] = useState('')
  //false for z-a, true for a-z
  const [sort, setSort] = useState(true)
  const [listings, setListings] = useState([])
  // const updateSearch = (value) => {
  //   setSearch(value)
  // }

  const updateSort = (value) => {
    //deal with conversion from string to bool 
    if(value === "true"){
      setSort(true)
    } else {
      setSort(false)
    }
  }

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

  const sortedListings = filteredListings.sort((curItem, nextItem) => {
    if(sort){ //A-Z
      return curItem.location.localeCompare(nextItem.location)
    } else { //Z-A
      return nextItem.location.localeCompare(curItem.location)
    }
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

  const addItem = (newItem) => {
    setListings([...listings, newItem])
  }
  

  return (
    <div className="app">
      <Header updateSearch={(value) => {setSearch(value)}}  updateSort={updateSort}/>
      <ListingForm addItem={addItem} />
      <ListingsContainer listings={sortedListings} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
