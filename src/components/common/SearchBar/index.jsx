import React from 'react';
import './searchBar.css';
const SearchBar = (props) => {
  return (
    <>
      <div class="search-bar">{props.children}</div>
    </>
  );
};

export default SearchBar;
