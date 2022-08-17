import React from "react";
import Search from "./Search";

function Header({ search, changeSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} changeSearch={changeSearch} />
    </header>
  );
}

export default Header;
