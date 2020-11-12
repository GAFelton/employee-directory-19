import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <button className="navbar-brand bg-primary" href="/">
        React Employee Directory
      </button>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <span class="navbar-text">Sort by: </span>
          <li className="nav-item dropdown m-1">
            <button className="btn dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              First Name
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button className="dropdown-item">Ascending</button>
              <button className="dropdown-item">Descending</button>
            </div>
          </li>
          <li className="nav-item dropdown m-1">
            <button className="btn dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Last Name
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button className="dropdown-item">Ascending</button>
              <button className="dropdown-item">Descending</button>
            </div>
          </li>
          <li className="nav-item dropdown m-1">
            <button className="btn dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Phone Number
        </button>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <button className="dropdown-item">Ascending</button>
              <button className="dropdown-item">Descending</button>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Nav;
