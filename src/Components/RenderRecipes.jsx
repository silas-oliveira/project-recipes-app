import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MAX_RECIPES = 12;

function RenderRecipes(props) {
  const { recipes, local } = props;
  return (
    <div className="row">
      {
        recipes.slice(0, MAX_RECIPES).map((recipe, index) => (
          <div
            key={ recipe.idDrink || recipe.idMeal }
            className="col-12 col-sm-6 col-lg-4 p-2"
          >
            <div
              className={ `shadow-custom border-card-custom position-relative
              min-card-height` }
            >
              <Link
                to={ `/${local}/${recipe.idDrink || recipe.idMeal}` }
                data-testid={ `${index}-recipe-card` }
                className="text-decoration-none"
              >
                <img
                  src={ recipe.strDrinkThumb || recipe.strMealThumb }
                  alt={ local === 'bebidas' ? 'Drink' : 'Food' }
                  data-testid={ `${index}-card-img` }
                  className="img-card"
                />
                <p
                  data-testid={ `${index}-card-name` }
                  className="text-white font-bolder fs-3 font-monospace recipe-name"
                >
                  {recipe.strDrink || recipe.strMeal}
                </p>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
}

RenderRecipes.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  local: PropTypes.string.isRequired,
};

export default RenderRecipes;
