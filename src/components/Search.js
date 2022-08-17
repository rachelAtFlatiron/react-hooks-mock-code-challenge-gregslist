import React from "react";

function Search({ search, changeSearch, submitSearch }) {
  
  function handleSubmit(e) {
    submitSearch(e);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={changeSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
