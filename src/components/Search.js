import { useState } from "react";

/*
CONTROLLED FORM
1. state
2. form's value
3. onchange
*/

function Search({ updateSearch }) {

  //handle form values / update user onChanges
  const [ form, setForm ] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    //set state in App.js / handle user submit
    updateSearch(form)
  }

  function handleChange(e){
    setForm(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={form}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
