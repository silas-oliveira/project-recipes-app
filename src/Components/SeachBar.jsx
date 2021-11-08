import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchApi from '../services/searchApi';

function SearchBar(props) {
  const history = useHistory();
  const { local } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  function getRadioSelected(e) {
    setType(e.target.value);
  }

  async function makeSearch(e) {
    const key = local.toLowerCase();
    e.preventDefault();
    if (type === 'Primeira letra' && search.length !== 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      return;
    }
    const result = await searchApi(type, search, local);
    if (!result) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
      return;
    }
    if (result && result.length === 1) {
      history.push(`${key}/${result[0][key === 'bebidas' ? 'idDrink' : 'idMeal']}`);
    }
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

SearchBar.propTypes = {
  local: PropTypes.string.isRequired,
};

export default SearchBar;
