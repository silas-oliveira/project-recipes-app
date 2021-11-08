import React from 'react';

function SearchBar() {
  return (
    <div>
      <input type="text" data-testid="search-input" />
      <label data-testid="ingredient-search-radio" htmlFor="radioButton">
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="radioButton"
          id="radioButton"
        />
        ingredients
      </label>
      <label data-testid="name-search-radio" htmlFor="nameSearch">
        <input
          data-testid="name-search-radio"
          type="radio"
          name="radioButton"
          id="nameSearch"
        />
        name
      </label>
      <label data-testid="first-letter-search-radio" htmlFor="letterSearch">
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="radioButton"
          id="letterSearch"
        />
        first letter
      </label>
      <button type="submit" data-testid="exec-search-btn">search</button>
    </div>
  );
}

export default SearchBar;
