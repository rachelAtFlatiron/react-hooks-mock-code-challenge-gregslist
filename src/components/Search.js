import React from "react";

function Search({ search, changeSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
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
