import React, {useState} from "react";

/*
Controlled form

state -> view -> event -> state -> ...
1. create state for form (state)
2. have form values reflect state (view)
3. create an onChange handler to update state (event)

*/
function Search({ updateSearch, updateSort }) {

  //note sort is a string value, will have to convert to boolean (we are doing this App)
  const initialForm = {
    search: '',
    sort: "true"
  }

  const [form, setForm] = useState(initialForm)

  function handleSubmit(e) {
    e.preventDefault();
    updateSearch(form.search)
    updateSort(form.sort)
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
      <select name="sort" value={form.sort} onChange={(e) => handleChange(e)}>
        <option value="true">A-Z</option>
        <option value="false">Z-A</option>
      </select>
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
