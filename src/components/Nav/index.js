import React from "react";

function Nav({ query, onInputChange, onSortChange, currentKey, currentOrder }) {
  const sorts = [
    {
      key: "firstName",
      label: "First Name",
    },
    {
      key: "lastName",
      label: "Last Name",
    },
    {
      key: "phone",
      label: "Phone Number",
    },
  ];

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
      <button className='navbar-brand bg-primary' href='/'>
        React Employee Directory
      </button>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <span class='navbar-text'>Sort by: </span>
          {sorts.map(({ key, label }) => (
            <li key={key} className='nav-item dropdown m-1'>
              <button
                style={currentKey === key ? { color: "white" } : {}}
                onClick={() =>
                  onSortChange(key, currentOrder === "asc" ? "desc" : "asc")
                }
                className='dropdown-item'
              >
                {label} - {currentOrder === "asc" ? "Ascending" : "Descending"}
              </button>
            </li>
          ))}
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            onChange={onInputChange}
            className='form-control mr-sm-2'
            type='search'
            value={query}
            placeholder='Search'
            aria-label='Search'
          />
        </form>
      </div>
    </nav>
  );
}

export default Nav;
