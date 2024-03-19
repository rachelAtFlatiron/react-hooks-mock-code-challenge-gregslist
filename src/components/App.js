import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

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

  // const updateSearch = (value) => {
  //   setSearch(value)
  // }

  return (
    <div className="app">
      <Header updateSearch={(value) => {setSearch(value)}} />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
