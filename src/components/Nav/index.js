import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <a className="navbar-brand" href="/">
        React Employee Directory
      </a>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="sortDropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By:
  </button>
  <div className="dropdown-menu" aria-labelledby="sortDropdownMenu">
    <button className="dropdown-item" type="button">Action</button>
    <button className="dropdown-item" type="button">Another action</button>
    <button className="dropdown-item" type="button">Something else here</button>
  </div>
</div>
    </nav>
  );
}

export default Nav;
