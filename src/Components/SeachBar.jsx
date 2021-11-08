import React, { useState } from 'react';
import searchApi from '../services/searchApi';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  function getRadioSelected(e) {
    setType(e.target.value);
  }

  function makeSearch(e) {
    e.preventDefault();
    if (type === 'Primeira letra' && search.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    searchApi(type, search);
  }

  return (
    <form onSubmit={ makeSearch }>
      <input
        type="text"
        data-testid="search-input"
        onChange={ (e) => setSearch(e.target.value) }
      />
      <div onChange={ getRadioSelected }>
        <label htmlFor="ingredientButton">
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="radioButton"
            id="ingredientButton"
            value="Ingrediente"
          />
          Ingrediente
        </label>
        <label htmlFor="nameSearch">
          <input
            data-testid="name-search-radio"
            type="radio"
            name="radioButton"
            id="nameSearch"
            value="Nome"
          />
          Nome
        </label>
        <label htmlFor="letterSearch">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="radioButton"
            id="letterSearch"
            value="Primeira letra"
          />
          Primeira letra
        </label>
      </div>
      <button type="submit" data-testid="exec-search-btn">Procurar</button>
    </form>
  );
}

export default SearchBar;
