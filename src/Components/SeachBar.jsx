import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { searchApi } from '../services/requestApi';
import ContextAppReceita from '../ContextAPI/ContextAppReceita';

const PRIMEIRA_LETRA = 'Primeira letra';

function SearchBar(props) {
  const history = useHistory();
  const { local } = props;
  const { setMeals, setDrinks } = useContext(ContextAppReceita);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('Ingrediente');

  function getRadioSelected(e) {
    setType(e.target.value);
  }

  async function makeSearch(e) {
    const key = local.toLowerCase();
    e.preventDefault();
    if (type === PRIMEIRA_LETRA && search.length !== 1) {
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
    return key === 'bebidas' ? setDrinks(result) : setMeals(result);
  }

  function renderRadioButtons() {
    return (
      <div
        onChange={ getRadioSelected }
        className="custom-row get-all-space m-0"
      >
        <div className="col-12 col-lg-4 radio1">
          <label htmlFor="ingredientButton" className="input-group my-1">
            <div className="input-group-text">
              <input
                data-testid="ingredient-search-radio"
                type="radio"
                name="radioButton"
                id="ingredientButton"
                value="Ingrediente"
                className="form-check-input mt-0"
                checked={ type === 'Ingrediente' }
                aria-label="Ingrediente"
              />
            </div>
            <span
              className="form-control bg-white bg-white"
            >
              Ingrediente
            </span>
          </label>
        </div>
        <div className="col-12 col-lg-4 radio2">
          <label htmlFor="nameSearch" className="input-group my-1">
            <div className="input-group-text">
              <input
                data-testid="name-search-radio"
                type="radio"
                name="radioButton"
                id="nameSearch"
                value="Nome"
                checked={ type === 'Nome' }
                className="form-check-input mt-0"
                aria-label="Ingrediente"
              />
            </div>
            <span
              className="form-control bg-white"
            >
              Nome
            </span>
          </label>
        </div>
        <div className="col-12 col-lg-4 radio3">
          <label htmlFor="letterSearch" className="input-group my-1">
            <div className="input-group-text">
              <input
                data-testid="first-letter-search-radio"
                type="radio"
                name="radioButton"
                id="letterSearch"
                value="Primeira letra"
                checked={ type === 'Primeira letra' }
                className="form-check-input mt-0"
                aria-label="Ingrediente"
              />
            </div>
            <span
              className="form-control bg-white"
            >
              Primeira letra
            </span>
          </label>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={ makeSearch }
      className="bg-white container py-2 px-3 border-search-bar rounded-bottom"
    >
      {renderRadioButtons()}
      <div className="input-group my-3">
        <span
          className="input-group-text input-group-search-bar"
          id="inputGroup-input"
        >
          {type}
        </span>
        <input
          type="text"
          data-testid="search-input"
          className="form-control ps-4"
          aria-label="Nome da receita/produto/primeira letra"
          onChange={ (e) => setSearch(e.target.value) }
          aria-describedby="inputGroup-input"
          placeholder={ `Informe ${type === PRIMEIRA_LETRA ? 'a' : 'o'} ${type}` }
        />
      </div>
      <Button
        type="submit"
        data-testid="exec-search-btn"
        className="btn-all-width"
      >
        Procurar
      </Button>
    </form>
  );
}

SearchBar.propTypes = {
  local: PropTypes.string.isRequired,
};

export default SearchBar;
