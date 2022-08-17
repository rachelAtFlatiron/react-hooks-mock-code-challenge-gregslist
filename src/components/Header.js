import React from "react";
import Search from "./Search";

function Header({ search, changeSearch, submitSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} changeSearch={changeSearch} submitSearch={submitSearch} />
    </header>
  );
}

export default Header;
