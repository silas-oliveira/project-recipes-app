import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import RenderFilterBtn from '../Components/RenderFilterBtn';
import RenderMultiplesShare from '../Components/RenderMultiplesShare';
import { catchDoneRecipes } from '../localStorage';

function ReceitasFeitas() {
  const [index, setIndex] = useState('');
  const doneRecipes = catchDoneRecipes();

  const [filterRecipes, setFilterRecipes] = useState(doneRecipes);
  const [filter, setFilter] = useState('All');

  const handleClick = (type) => {
    setFilter(type);
    const foodRecipes = doneRecipes.filter((recipe) => recipe.type === 'comida');
    const drinkRecipes = doneRecipes.filter((recipe) => recipe.type === 'bebida');
    switch (type) {
    case 'Food':
      setFilterRecipes(foodRecipes);
      break;
    case 'Drinks':
      setFilterRecipes(drinkRecipes);
      break;
    case 'All':
      setFilterRecipes(doneRecipes);
      break;
    default:
      break;
    }
  };

  function renderRecipeImgAndDetails(recipe, i) {
    return (
      <>
        <img
          src={ recipe.image }
          alt={ recipe.name }
          data-testid={ `${i}-horizontal-image` }
          className="img-card2"
        />
        <p
          data-testid={ `${i}-horizontal-top-text` }
          className={ `text-white font-bolder fs-6
          font-monospace recipe-name custom-line-height` }
        >
          {recipe.type === 'comida' ? `${recipe.area} - ${recipe.category}`
            : recipe.alcoholicOrNot}
        </p>
      </>
    );
  }

  function renderRecipeName(name, i) {
    return (
      <p
        data-testid={ `${i}-horizontal-name` }
        className={ `text-color-custom font-bolder fs-4 font-monospace
          m-2 custom-line-height recipe-name-done overflow-auto` }
      >
        {name}
      </p>
    );
  }

  return (
    <div>
      <Header title="Receitas Feitas" />
      <div className="container">
        <div className="row my-3">
          <RenderFilterBtn
            disabled={ filter === 'All' }
            attribute="All"
            handleClick={ handleClick }
          />
          <RenderFilterBtn
            disabled={ filter === 'Food' }
            attribute="Food"
            handleClick={ handleClick }
          />
          <RenderFilterBtn
            disabled={ filter === 'Drinks' }
            attribute="Drinks"
            handleClick={ handleClick }
          />
        </div>
        <div className="row">
          {filterRecipes && filterRecipes.map((recipe, i) => {
            const { id, doneDate, tags, type, name } = recipe;
            return (
              <div key={ id } className="col-6 col-sm-6 col-lg-4 p-2">
                {/* { mudar aqui, colocar col-12 no lugar de col-6 } */}
                <div>
                  <div
                    className="shadow-custom border-card-custom2"
                  >
                    <div className="position-relative">
                      <Link
                        to={ `${type}s/${id}` }
                        className="text-decoration-none"
                      >
                        {renderRecipeImgAndDetails(recipe, i)}
                      </Link>
                    </div>
                    <div className="position-relative">
                      <Link
                        to={ `${type}s/${id}` }
                        className="text-decoration-none"
                      >
                        {renderRecipeName(name, i)}
                      </Link>
                      <RenderMultiplesShare
                        id={ id }
                        index={ i }
                        copied={ index === i }
                        type={ type }
                        replace="receitas-feitas"
                        onClick={ () => setIndex(i) }
                      />
                      <p
                        data-testid={ `${i}-horizontal-done-date` }
                        className="fs-7 mx-2 mb-2 font-monospace"
                      >
                        {`Feita em: ${doneDate}`}
                      </p>
                      <p
                        className="fs-6 mx-2 my-1 font-bolder overflow-scroll tag-sizing"
                      >
                        Tags:
                        {tags && tags.length > 0 ? tags.map((tag, idx) => (
                          <span
                            key={ idx }
                            data-testid={ `${i}-${tag}-horizontal-tag` }
                            className="ms-1"
                          >
                            {tag}
                          </span>
                        )) : <span className="mx-1">Nenhuma tag</span> }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ReceitasFeitas;
