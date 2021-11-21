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
          data-testid={ `${i}-horizontal-name` }
          className={ `text-white font-bolder fs-5 text-shadow-custom
          font-monospace recipe-name-done custom-line-height` }
        >
          {recipe.name}
        </p>
      </>
    );
  }

  return (
    <>
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
            const { id, doneDate, tags, type } = recipe;
            return (
              <div key={ id } className="col-6 col-sm-6 col-lg-4 p-2">
                {/* { mudar aqui, colocar col-12 no lugar de col-6 } */}
                <div>
                  <div
                    className="shadow-custom border-card-custom2 min-card-height"
                  >
                    <div className="position-relative">
                      <Link
                        to={ `${type}s/${id}` }
                        className="text-decoration-none"
                      >
                        {renderRecipeImgAndDetails(recipe, i)}
                      </Link>
                    </div>
                    <div className="position-relative my-2">
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
                        className="fs-7 ms-2 mb-2 done-date font-monospace"
                      >
                        {`Feita em: ${doneDate}`}
                      </p>
                      <p
                        data-testid={ `${i}-horizontal-top-text` }
                        className={ `fw-bold mx-2 mb-2 fs-6 category-done
                          font-monospace custom-line-height` }
                      >
                        {recipe.type === 'comida' ? `${recipe.area} - ${recipe.category}`
                          : recipe.alcoholicOrNot}
                      </p>
                      <p
                        className="fs-6 mx-2 my-1 font-bolder overflow-auto tag-sizing"
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
    </>
  );
}

export default ReceitasFeitas;
