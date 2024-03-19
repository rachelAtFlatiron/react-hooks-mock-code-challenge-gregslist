import React, {useState} from "react";

/*
Controlled form

state -> view -> event -> state -> ...
1. create state for form (state)
2. have form values reflect state (view)
3. create an onChange handler to update state (event)

*/
function Search({ updateSearch }) {

  const initialForm = {
    search: ''
  }

  const [form, setForm] = useState(initialForm)

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(form.search)
    setForm(initialForm)
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search free stuff"
        value={form.search}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
