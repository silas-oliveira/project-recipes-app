import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MAX_RECIPES = 12;

function RenderRecipes(props) {
  const { recipes, local } = props;
  return (
    <div>
      {
        recipes.slice(0, MAX_RECIPES).map((recipe, index) => (
          <Link
            to={ `/${local}/${recipe.idDrink}` }
            key={ recipe.idDrink || recipe.idMeal }
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ recipe.strDrinkThumb || recipe.strMealThumb }
              alt={ local === 'bebidas' ? 'Drink' : 'Food' }
              data-testid={ `${index}-card-img` }
              className="card-img"
            />
            <span data-testid={ `${index}-card-name` }>
              {recipe.strDrink || recipe.strMeal}
            </span>
          </Link>
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
