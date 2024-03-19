import React from "react";
import Search from "./Search";

function Header({ updateSearch, updateSort }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search updateSearch={updateSearch} updateSort={updateSort} />
    </header>
  );
}

export default Header;
